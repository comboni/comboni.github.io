angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EtapasCtrl', function($scope, $http) {
  $http.get('js/data.json')
        .success(function (data) {
            // The json data will now be in scope.
            $scope.etapas = data;
        });
  $scope.xetapas = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('EtapaCtrl', function($scope, $stateParams, $http, $ionicScrollDelegate) {
  $http.get('js/data.json')
    .success(function (data) {
        // The json data will now be in scope.
        $scope.etapa = data[$stateParams.etapasId];
        console.log("stateParams: " + $stateParams.etapasId);
        console.log("etapa: " + $scope.etapa.title);
    }); 
  $scope.fly = $stateParams.etapasId;

  $scope.benedictus = "Bendito sea el Señor, Dios de Israel,<br>porque ha visitado y redimido a su pueblo,<br>suscitándonos una fuerza de salvación<br>en la casa de David, su siervo,<br>según lo había predicho desde antiguo<br>por boca de sus santos profetas.<br><br>Es la salvación que nos libra de nuestros enemigos<br>y de la mano de todos los que nos odian;<br>realizando la misericordia<br>que tuvo con nuestros padres,<br>recordando su santa alianza<br>y el juramento que juró a nuestro padre Abrahán.<br><br>Para concedernos que, libres de temor,<br>arrancados de la mano de los enemigos,<br>le sirvamos con santidad y justicia,en su presencia, todos nuestros días.<br><br>Y a ti, niño, te llamarán profeta del Altísimo,<br>porque irás delante del Señor<br>a preparar sus caminos,<br>anunciando a su pueblo la salvación,<br>el perdón de sus pecados.<br><br>Por la entrañable misericordia de nuestro Dios,<br>nos visitará el sol que nace de lo alto,<br>para iluminar a los que viven en tinieblas<br>y en sombra de muerte,<br>para guiar nuestros pasos<br>por el camino de la paz.";  
  $scope.padrenuestro = "Padre nuestro, que estás en el cielo,<br>santificado sea tu Nombre;<br>venga a nosotros tu reino;<br>hágase tu voluntad en la tierra como en el cielo.<br>Danos hoy nuestro pan de cada día;<br>perdona nuestras ofensas,<br>como también nosotros perdonamos a los que nos ofenden;<br>no nos dejes caer en la tentación,<br>y líbranos del mal. Amen";  

  $scope.santiago_prayer = "Señor, Jesús<br>que llamaste al Apóstol Santiago<br>de humilde pescador<br>a ser uno de los Doce<br>y le diste la fuerza de tu gracia<br>para predicar el Evangelio,<br>aún al precio de su propia vida,<br>te pedimos <br>que nos bendigas y acompañes<br>en este caminar hacia Santiago de Compostela,<br>para que imitando su ejemplo<br> descubramos tu llamada<br>a servir a nuestros hermanos<br>en una Iglesia más misionera<br>que acoge y transmite la vida. <br>A ti, que vives y reinas,<br>Por los siglos de los siglos.<br>Amén";

  $scope.show1 = false;
  $scope.show2 = false;
  $scope.click1 = function($event) { 
    $event.stopPropagation();
    $scope.show1 = !$scope.show1;
    $scope.show2 = false;
    $scope.show3 = false;
    $ionicScrollDelegate.scrollTo(0, 250, true);
    //$ionicListDelegate.closeOptionButtons();
  }
  $scope.click2 = function($event) {
    $event.stopPropagation();
    $scope.show2 = !$scope.show2;
    $scope.show1 = false;
    $scope.show3 = false;
    $ionicScrollDelegate.scrollTo(0, 250, true);
    //$ionicListDelegate.closeOptionButtons(); 
  }
  $scope.click3 = function($event) {
    $event.stopPropagation();
    $scope.show3 = !$scope.show3;
    $scope.show1 = false;
    $scope.show2 = false;  
    $ionicScrollDelegate.scrollTo(0, 250, true);
    //$ionicListDelegate.closeOptionButtons(); 
  }
  $scope.hideAll = function() { 
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    //$ionicListDelegate.closeOptionButtons();
  }


  $scope.fonts =  [
            "Arial",
            "Tahoma"
                  ];
  $scope.text =   {
            font: "Arial",
            size: 18,
            color: "blue"
              };


});
