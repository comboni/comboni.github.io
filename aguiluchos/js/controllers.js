
angular.module('wpIonic.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $sce, DataLoader, $rootScope, $log ) {
  
  // Enter your site url here. You must have the WP-API v2 installed on this site. Leave /wp-json/wp/v2/ at the end.
  $rootScope.url = 'http://s311770442.mialojamiento.es/aguiwp/wp-json/wp/v2/';
  //$rootScope.url = 'http://www.silanet.org/wp-json/wp/v2/';

  // $rootScope.callback = '_jsonp=JSON_CALLBACK';

})

.controller('PostCtrl', function($scope, $stateParams, DataLoader, $ionicLoading, $rootScope, $sce, CacheFactory, $log, Bookmark, $timeout ) {

  if ( ! CacheFactory.get('postCache') ) {
    CacheFactory.createCache('postCache');
  }
  var postCache = CacheFactory.get( 'postCache' );
  $scope.itemID = $stateParams.postId;
  var singlePostApi = $rootScope.url + 'posts/' + $scope.itemID;
  console.log(singlePostApi)
  $scope.loadPost = function() {

    // Fetch remote post
    $ionicLoading.show({
      noBackdrop: true
    });

    DataLoader.get( singlePostApi ).then(function(response) {
      $scope.post = response.data;
      $log.debug($scope.post);
      // Don't strip post html
      $scope.content = $sce.trustAsHtml(response.data.content.rendered);
      // $scope.comments = $scope.post._embedded['replies'][0];
      // add post to our cache
      postCache.put( response.data.id, response.data );
      $ionicLoading.hide();
    }, function(response) {
      $log.error('error', response);
      $ionicLoading.hide();
    });

  }

  if( !postCache.get( $scope.itemID ) ) {
    // Item is not in cache, go get it
    $scope.loadPost();
  } else {
    // Item exists, use cached item
    $scope.post = postCache.get( $scope.itemID );
    $scope.content = $sce.trustAsHtml( $scope.post.content.rendered );
    // $scope.comments = $scope.post._embedded['replies'][0];
  }
  // Bookmarking
  $scope.bookmarked = Bookmark.check( $scope.itemID );

  $scope.bookmarkItem = function( id ) {
    
    if( $scope.bookmarked ) {
      Bookmark.remove( id );
      $scope.bookmarked = false;
    } else {
      Bookmark.set( id );
      $scope.bookmarked = true;
    }
  }

  // Pull to refresh
  $scope.doRefresh = function() {
  
    $timeout( function() {

      $scope.loadPost();

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
  };
})

//*******************************************************************//
//******************  Recientes CONTROLLER  *****************************//
//*******************************************************************//

.controller('PostsCtrl', function( $scope, $http, DataLoader, $timeout, $ionicSlideBoxDelegate, $rootScope, $log ) {

  //var postsApi = $rootScope.url + 'posts';
//  var postsApi = $rootScope.url + 'posts?filter[category_name]=telemundo';
  //var postsApiTele = $rootScope.url + 'posts?filter[tag]=mov,filter[tag]=telemundo'; //OR
  var postsApiAll = $rootScope.url + 'posts?filter[tag]=mov'; // all posts
  //var postsApiTele = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=telemundo'; //AND
  //var postsApiComic = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=comic';//2
  //var postsApiDestak2 = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=destak2';//13

//?filter[category_name]=telemundo&per_page=3

  $scope.moreItems = false;

  $scope.loadPosts = function() {
    // Get all of our posts
    DataLoader.get( postsApiAll ).then(function(response) {
      $scope.postsAll = response.data;
      $scope.moreItems = true;
      $log.log(postsApiAll, response.data);
      console.log('All: ', $scope.postsAll);
    }, function(response) {
      $log.log(postsApiAll, response.data);
    });
    // DataLoader.get( postsApiTele ).then(function(response) {
    //   $scope.postsTele = response.data;
    //   $scope.moreItems = true;
    //   $log.log(postsApiTele, response.data);
    //   console.log('Telemundo: ', $scope.postsTele);
    // }, function(response) {
    //   $log.log(postsApiTele, response.data);
    // });
    // DataLoader.get( postsApiComic ).then(function(response) {
    //   $scope.postsComic = response.data;
    //   $scope.moreItems = true;
    //   $log.log(postsApiComic, response.data);
    //   console.log('Comic: ', $scope.postsComic);
    // }, function(response) {
    //   $log.log(postsApiComic, response.data);
    // });
    // DataLoader.get( postsApiDestak2 ).then(function(response) {
    //   $scope.postsDestak2 = response.data;
    //   $scope.moreItems = true;
    //   $log.log(postsApiDestak2, response.data);
    //   console.log('Destak2: ', $scope.postsDestak2);
    // }, function(response) {
    //   $log.log(postsApiDestak2, response.data);
    // });

  }

  // Load posts on page load
  $scope.loadPosts();

  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {

    if( !$scope.moreItems ) {
      return;
    }

    var pg = paged++;

    $log.log('loadMore ' + pg );

    $timeout(function() {

      DataLoader.get( postsApiAll + '?page=' + pg ).then(function(response) {

        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });

        if( response.data.length <= 0 ) {
          $scope.moreItems = false;
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');

    }, 1000);

  }

  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }

  // Pull to refresh
  $scope.doRefresh = function() {
  
    $timeout( function() {

      $scope.loadPosts();

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
    
})

//*******************************************************************//
//******************  COMIC CONTROLLER  *****************************//
//*******************************************************************//

.controller('ComicCtrl', function( $scope, $http, DataLoader, $timeout, $ionicSlideBoxDelegate, $rootScope, $log ) {
  //var postsApi = $rootScope.url + 'posts';
  var postsApiComic = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=comic';
//?filter[category_name]=telemundo&per_page=3
  $scope.moreItems = false;
  $scope.loadPosts = function() {
    // Get all of our posts
    DataLoader.get( postsApiComic ).then(function(response) {
      $scope.postsComic = response.data;
      $scope.moreItems = true;
      $log.log(postsApiComic, response.data);
      console.log('Comic: ', $scope.postsComic);
    }, function(response) {
      $log.log(postsApiComic, response.data);
    });
  }
  $scope.ceci = "Bakhita radio";
  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      return;
    }
    var pg = paged++;
    $log.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApiAll + '?page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });
        if( response.data.length <= 0 ) {
          $scope.moreItems = false;
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');
    }, 1000);
  }
  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }
  // Pull to refresh
  $scope.doRefresh = function() {
     $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
     }, 1000);
  };
})

//*******************************************************************//
//******************  Telemundo CONTROLLER  *****************************//
//*******************************************************************//

.controller('TelemundoCtrl', function( $scope, $http, DataLoader, $timeout, $ionicSlideBoxDelegate, $rootScope, $log ) {
  //var postsApi = $rootScope.url + 'posts';
  var postsApiTelemundo = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=telemundo';
//?filter[category_name]=telemundo&per_page=3
  $scope.moreItems = false;
  $scope.loadPosts = function() {
    // Get all of our posts
    DataLoader.get( postsApiTelemundo ).then(function(response) {
      $scope.postsTelemundo = response.data;
      $scope.moreItems = true;
      $log.log(postsApiTelemundo, response.data);
      console.log('Comic: ', $scope.postsTelemundo);
    }, function(response) {
      $log.log(postsApiTelemundo, response.data);
    });
  }
  $scope.ceci = "Bakhita radio";
  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      return;
    }
    var pg = paged++;
    $log.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApiAll + '?page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });
        if( response.data.length <= 0 ) {
          $scope.moreItems = false;
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');
    }, 1000);
  }
  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }
  // Pull to refresh
  $scope.doRefresh = function() {
     $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
     }, 1000);
  };
})

//*******************************************************************//
//******************  Destak2 CONTROLLER  *****************************//
//*******************************************************************//

.controller('destak2Ctrl', function( $scope, $http, DataLoader, $timeout, $ionicSlideBoxDelegate, $rootScope, $log ) {
  //var postsApi = $rootScope.url + 'posts';
  var postsApiDestak2 = $rootScope.url + 'posts?filter[tag]=mov&filter[category_name]=destak2';
//?filter[category_name]=telemundo&per_page=3
  $scope.moreItems = false;
  $scope.loadPosts = function() {
    // Get all of our posts
    DataLoader.get( postsApiDestak2 ).then(function(response) {
      $scope.postsDestak2 = response.data;
      $scope.moreItems = true;
      $log.log(postsApiDestak2, response.data);
      console.log('Destak2: ', $scope.postsDestak2);
    }, function(response) {
      $log.log(postsApiDestak2, response.data);
    });
  }
  $scope.ceci = "Bakhita radio";
  // Load posts on page load
  $scope.loadPosts();
  paged = 2;

  // Load more (infinite scroll)
  $scope.loadMore = function() {
    if( !$scope.moreItems ) {
      return;
    }
    var pg = paged++;
    $log.log('loadMore ' + pg );
    $timeout(function() {
      DataLoader.get( postsApiAll + '?page=' + pg ).then(function(response) {
        angular.forEach( response.data, function( value, key ) {
          $scope.posts.push(value);
        });
        if( response.data.length <= 0 ) {
          $scope.moreItems = false;
        }
      }, function(response) {
        $scope.moreItems = false;
        $log.error(response);
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');
    }, 1000);
  }
  $scope.moreDataExists = function() {
    return $scope.moreItems;
  }
  // Pull to refresh
  $scope.doRefresh = function() {
     $timeout( function() {
      $scope.loadPosts();
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
     }, 1000);
  };
})

.controller('BookmarksCtrl', function( $scope, $http, DataLoader, $timeout, $rootScope, $log, Bookmark, CacheFactory ) {

  $scope.$on('$ionicView.enter', function(e) {

    if ( ! CacheFactory.get('postCache') ) {
      CacheFactory.createCache('postCache');
    }

    var postCache = CacheFactory.get( 'postCache' );

    if ( ! CacheFactory.get('bookmarkCache') ) {
      CacheFactory.createCache('bookmarkCache');
    }

    var bookmarkCacheKeys = CacheFactory.get( 'bookmarkCache' ).keys();

    $scope.posts = [];
  
    angular.forEach( bookmarkCacheKeys, function( value, key ) {
      var newPost = postCache.get( value );
      $scope.posts.push( newPost );
    });

  });
    
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicHistory) {

  // $ionicSlideBoxDelegate.update();

  $ionicHistory.nextViewOptions({
    disableBack: true
  });
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.posts');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

})

.controller('TabsCtrl', function($scope) {

  // Tabs stuff here

});