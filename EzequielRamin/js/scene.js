var controller = new ScrollMagic.Controller({vertical: false});

$(window).load(function () { // wait for document ready


///////////////
// Section 1 //
///////////////

//TweenMax.to(element, duration, {parameters})
//.to - go to the values given
//ease - see: https://greensock.com/customease/

// TweenMax.to("#raminimg", 2, {opacity:1, delay:.5,  ease:Power0.easeNone})

function hidehand(){
	$('#handcont').css({"opacity": 0});
	$('#curtain').css({"height": $('#steps').height()*2});
	// $('#progressline').css({"opacity": 0});
}
var showhand = function () {
	$('#handcont').css({"opacity": 1});
	$('#curtain').css({"height": 1});
	// $('#steps').css({"opacity": 1});
	// $('#progressline').css({"opacity": 1});
};
function dostep1(){
	var posfinger = $('#is2').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	var tl1 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl1
	.from("#raminimg", .5, {opacity: 0, right:-400, delay:.5,  ease:Power0.easeNone})
	.from("#sec1_title", .5, {opacity:0, delay:1,  ease:Power0.easeNone})
	.from("#sec1_title2", .5, {opacity:0, delay:1.5,  ease:Power0.easeNone})	

	// TweenMax.from("#steps", 2, {opacity:0, delay:3,  ease:Power0.easeNone})	
	// TweenMax.from("#progressline", 2, {opacity:0, delay:3,  ease:Power0.easeNone})	

	// .from("#click-index", 2, {opacity: 0, delay:3.5,  ease:Power0.easeNone, repeat:-1})
	.play()
}



///////////////
// Section 2 //
///////////////
function dostep2(){
	var posfinger = $('#is3').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	var tl2 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl2
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from('#date1_02', .3, {opacity:0}, "+=.1")
	.from('#tb1_02', .3, {opacity:0}, "+=.1")
	.from('#img1_02', .3, {opacity:0}, "+=.1")
	// .fromTo('.st1', 36, {drawSVG: '0%'}, {drawSVG:"100%"}, 1)

	.from('#date2_02', .3, {opacity:0}, "+=.1")
	.from('#tb2_02', .3, {opacity:0}, "+=.1")

	.from('#date3_02', .3, {opacity:0}, "+=.1")
	.from('#tb3_02', .3, {opacity:0}, "+=.1")

	.from('#date4_02', .3, {opacity:0}, "+=.1")
	.from('#tb4_02', .3, {opacity:0}, "+=.1")
	.from('#img2_02', .3, {opacity:0}, "+=.1")

	// .to("#steps", 1, {opacity:1}, "-=1")	
	// .to("#progressline", 1, {opacity:1}, "-=.5")

	.play()
}

///////////////
// Section 3 //
///////////////
function dostep3(){
	var posfinger = $('#is4').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	$('.imgxzoom').css("mapzoom", 0);
	var tl3 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl3
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.to("#map1_03", .5, {opacity:1, delay:0,  ease:Power0.easeNone})
	.to("#map1_03", 3, {scale:4, delay:0, ease:Power0.easeNone})
	.to("#map1_03", 0, {opacity:0, delay:0,  ease:Power0.easeNone})
	.to("#map2_03", 0, {opacity:1, delay:0,  ease:Power0.easeNone})
	.to("#map2_03", 3, {scale:4, delay:0, ease:Power0.easeNone})
	.to("#map2_03", 0, {opacity:0, delay:0,  ease:Power0.easeNone})
	.to("#map3_03", 0, {opacity:1, delay:0,  ease:Power0.easeNone})
	.to("#map3_03", 3, {scale:2, delay:0, ease:Power0.easeNone})
	.to("#map3_03", 0, {opacity:0, delay:0,  ease:Power0.easeNone})
	.to("#map4_03", 0, {opacity:1, delay:0,  ease:Power0.easeNone})
	.to("#map4_03", 3, {scale:1.1, delay:0, ease:Power0.easeNone})

	.from("#img1_03", 1, {opacity: 0, delay:0,  ease:Power0.easeNone})

	.from("#tb1_03", 1, {opacity: 0, delay:0,  ease:Power0.easeNone})
	.from("#tb2_03", 1, {opacity: 0, delay:0,  ease:Power0.easeNone})
	.from("#tb3_03", 1, {opacity: 0, delay:0,  ease:Power0.easeNone}, "+=1")

	// .to("#steps", 1, {opacity:1}, "-=1")	
	// .to("#progressline", 1, {opacity:1}, "-=.5")

	.play()
}

///////////////
// Section 4 //
///////////////
function dostep4(){
	var posfinger = $('#is5').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	var tl4 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl4
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#img1_04", .3, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb1_04", .3, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb2_04", .3, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb3_04", .3, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#img2_04", .3, {opacity:0, delay:0,  ease:Power0.easeNone})

	// .to("#steps", 1, {opacity:1}, "-=1")	
	// .to("#progressline", 1, {opacity:1}, "-=1.5")

	.play()
}

///////////////
// Section 5 //
///////////////
function dostep5(){
	var posfinger = $('#is6').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	var tl5 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl5
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#tb1_05", 1, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb2_05", 1, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb3_05", 1, {opacity:0, delay:0,  ease:Power0.easeNone})
	.from("#tb4_05", 1, {opacity:0, delay:0,  ease:Power0.easeNone})

	// .to("#steps", 1, {opacity:1})	
	// .to("#progressline", 1, {opacity:1}, "-=.5")

	.play()
}

///////////////
// Section 6 //
///////////////
// https://greensock.com/docs/Plugins/BezierPlugin
//car 1
function dostep6(){
	var posfinger = $('#is7').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

	var bezierData = MorphSVGPlugin.pathDataToBezier("#path1_06");
	var scaleData = [];
	var posimgX = $('#img1_06img').position().left;
	var posimgY = $('#img1_06').position().top;
	var scaleX = (((($('#img1_06img').width() / 826)-1)*1)+1)*1;
	var scaleY = (((($('#img1_06').height() / 636)-1)*1)+1)*1;
	var offX = posimgX + $('#img1_06img').width()*.47;
	var offY = posimgY + $('#img1_06').height()*.82;

	for (var i=0; i<bezierData.length; i++){
		var el = {x:bezierData[i].x*scaleX+offX, y:bezierData[i].y*scaleY+offY}
		scaleData.push(el)
	}
//car 2
	var bezierData2 = MorphSVGPlugin.pathDataToBezier("#path3_06");
	var scaleData2 = [];
	var scaleX2 = (((($('#img1_06img').width() / 826)-1)*1)+1)*3.9;
	var scaleY2 = (((($('#img1_06').height() / 636)-1)*1)+1)*3.2;
	var offX2 = posimgX + $('#img1_06img').width()*.47;
	var offY2 = posimgY + $('#img1_06').height()*.78;

	for (var i=0; i<bezierData2.length; i++){
		var el = {x:bezierData2[i].x*scaleX2+offX2, y:bezierData2[i].y*scaleY2+offY2}
		scaleData2.push(el)
	}

	var tl6 = new TimelineMax({repeat: 0, repeatDelay:0, yoyo: false, onComplete:showhand});
	tl6
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#lbl1_06", 1, {opacity:0, delay:.5,  ease:Power0.easeNone})
	.from("#lbl3_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")
	.from("#lbl2_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")
	.from("#rp1_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "-=0")
	.from("#boca1_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")
	.from("#boca2_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")

	.set("#car1_06", {autoAlpha:1, xPercent:50, yPercent:50})
	.to("#car1_06", 5, {bezier: {values:scaleData, type:"cubic", autoRotate:false}, ease: Sine.easeInOut, repeat:1, yoyo:true})
	.to("#car1_06", .5, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=0")

	.from("#boca3_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "-=7")
	.from("#boca4_06", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")

	.set("#car1b_06", {autoAlpha:1, xPercent:50, yPercent:50})
	.to("#car1b_06", 15, {bezier: {values:scaleData2, type:"cubic", autoRotate:false}, ease: Sine.easeInOut, repeat:0, yoyo:false})

	// .to("#steps", 1, {opacity:1}, "-=1")	
	// .to("#progressline", 1, {opacity:1}, "-=.5")

	.play()

}
///////////////
// Section 7 //
///////////////
function dostep7(){
	var posfinger = $('#is8').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

// TweenMax.to("#rp1_07", .1, {x:10, y:20, delay:.1,  ease:Power0.easeNone});
	//path 1
	var bezierData = MorphSVGPlugin.pathDataToBezier("#path1_07");
	var scaleData = [];
	var posimgX = $('#img1_07img').position().left;
	var posimgY = $('#img1_07').position().top;
	var scaleX = (((($('#img1_07img').width() / 1253)-1)*1)+1)*1.1;
	var scaleY = (((($('#img1_07').height() / 788)-1)*1)+1)*1.1;
	var offX = posimgX + $('#img1_07img').width()*0;
	var offY = posimgY + $('#img1_07').height()*.325;
	// TweenMax.to("#rp1_07", .1, {x:offX, y:offY, delay:.1,  ease:Power0.easeNone});
	for (var i=0; i<bezierData.length; i++){
		var el = {x:bezierData[i].x*scaleX+offX, y:bezierData[i].y*scaleY+offY}
		scaleData.push(el)
	}
	//path 2
	var bezierData2 = MorphSVGPlugin.pathDataToBezier("#path2_07");
	var scaleData2 = [];
	var scaleX2 = (((($('#img1_07img').width() / 1253)-1)*1)+1)*1;
	var scaleY2 = (((($('#img1_07').height() / 788)-1)*1)+1)*1;
	var offX2 = posimgX + $('#img1_07img').width()*.74;
	var offY2 = posimgY + $('#img1_07').height()*.52;

	for (var i=0; i<bezierData2.length; i++){
		var el = {x:bezierData2[i].x*scaleX2+offX2, y:bezierData2[i].y*scaleY2+offY2}
		scaleData2.push(el)
	}

	//path 3
	var bezierData3 = MorphSVGPlugin.pathDataToBezier("#path3_07");
	var scaleData3 = [];
	var scaleX3 = (((($('#img1_07img').width() / 1253)-1)*1)+1)*1;
	var scaleY3 = (((($('#img1_07').height() / 788)-1)*1)+1)*1;
	var offX3 = posimgX + $('#img1_07img').width()*.97;
	var offY3 = posimgY + $('#img1_07').height()*.85;

	for (var i=0; i<bezierData3.length; i++){
		var el = {x:bezierData3[i].x*scaleX3+offX3, y:bezierData3[i].y*scaleY3+offY3}
		scaleData3.push(el)
	}

var tl7 = new TimelineMax({paused:true, onComplete:showhand});
tl7
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#lbl1_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone})
	.from("#img2_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "-=1")
	.from("#lbl2_07", 1, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=1")
	.from("#img3_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "-=1")
	.from("#boca1_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "+=1")

	.set("#car1_07", {autoAlpha:1, xPercent:-50, yPercent:-50})
	.to("#car1_07", 5, {bezier: {values:scaleData, type:"cubic", autoRotate:false}, ease: Sine.easeInOut, repeat:0, yoyo:false})
	.to("#car1_07", .5, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=0")
	
	.from("#boca2_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "-=2")
	.from("#boca3_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "+=0")
	.from("#boca4_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "+=0")

	.set("#car2_07img", {autoAlpha:1, xPercent:-50, yPercent:-50})
	.to("#car2_07img", 5, {bezier: {values:scaleData2, type:"cubic", autoRotate:false}, ease: Sine.easeInOut, repeat:0, yoyo:false})
	.to("#car2_07img", .5, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=0")

	.from("#boca5_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "+=0")

	.to("#car1_07", .5, {opacity:1, rotationY:'-=180', delay:0,  ease:Power0.easeNone}, "-=1")
	.set("#car1_07", {autoAlpha:1, xPercent:-50, yPercent:-50})
	.to("#car1_07", 5, {bezier: {values:scaleData3, type:"cubic", autoRotate:false}, ease: Sine.easeInOut, repeat:0, yoyo:false}, "-=1")
	
	.from("#boca6_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "-=1")
	.to("#car1_07", .5, {opacity:0, delay:0,  ease:Power0.easeNone}, "+=0")
	.from("#img5_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "-=2")
	.from("#img4_07", 1, {opacity:0, delay:.5,  ease:Power0.easeNone}, "+=.5")	

	// .to("#steps", .1, {opacity:1}, "+=.5")	
	// .to("#progressline", 1, {opacity:1}, "+=.3")

	.play();

}

///////////////
// Section 8 //
///////////////
function dostep8(){
	var posfinger = $('#is9').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

var blurElement = {a:5};//start the blur at 0 pixels
function applyBlur()
{
    TweenMax.set(['#lbl1_08'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});  
};

var tl8 = new TimelineMax({paused:true, onComplete:showhand});
tl8
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#candle", 4, {opacity:0, x:150, delay:1,  ease:Power0.easeNone})	
	.from("#lbl1_08", 4, {opacity:0, x:20, scale:.9, delay:1,  ease:Power0.easeNone},"-=.5")	
	.to(blurElement, 10, {a:0, onUpdate:applyBlur},"-=4")

	// .to("#steps", .1, {opacity:1}, "+=.5")	
	// .to("#progressline", 1, {opacity:1}, "-=.2")

	.play();
}
///////////////
// Section 9 //
///////////////
function dostep9(){
	var posfinger = $('#is10').position().left + $(window).width()/100*2;
	$('#handcont').css({"left": posfinger});

var tl9 = new TimelineMax({paused:true, onComplete:showhand});
tl9
	// .to("#steps", .1, {opacity:0})	
	// .to("#progressline", .1, {opacity:0})

	.from("#img1_09", 1, {opacity:0, delay:1,  ease:Power0.easeNone})	
	.from("#tb1_09", .4, {opacity:0, x:20, scale:.9, delay:.1,  ease:Power0.easeNone},"-=.5")	
	.from("#tb2_09", .4, {opacity:0, x:20, scale:.9, delay:.1,  ease:Power0.easeNone},"+=1")	
	.from("#tb3_09", .4, {opacity:0, x:20, scale:.9, delay:.1,  ease:Power0.easeNone},"+=1")	

	// .to("#steps", .1, {opacity:1})	
	// .to("#progressline", .1, {opacity:1}, "+=.5")

	.play();
}

///////////////
// Section 10 //
///////////////












	// staggers letter drawing animation
	// .staggerFrom('.st0', 8, {drawSVG: '0% 0%', ease: Power1.easeInOut}, 0.25)
	// animates the fill color
	// .fromTo('.st0', 1, {fill: 'none'}, {fill:'none', ease: Power1.easeInOut}, '-=0.5');


// TweenMax.set('.st0', {visibility: 'visible'});
// var myscale = 1;
// $('.st1').css('transform', 'scale(' + myscale + ')');

// tl.fromTo('.st1', 3, {drawSVG: '30% 30%'}, {drawSVG:"30% 50%"}, 0.25);
// .fromTo('.st1', 10, {drawSVG: '0%'}, {drawSVG:"30%"}, '+=5');

// .fromTo('.st1', 3, {drawSVG: '1%'}, {drawSVG:"30%"}, '+=5')
// .fromTo('.st1', 3, {drawSVG: '30%'}, {drawSVG:"50%"}, '+=5')
// .fromTo('.st1', 3, {drawSVG: '50%'}, {drawSVG:"70%"}, '+=5')
// .fromTo('.st1', 3, {drawSVG: '70%'}, {drawSVG:"100%"}, '+=5');
	// staggers letter drawing animation
	// .staggerFrom('.st1', 3, {drawSVG: '0% 0%', ease: Power1.easeInOut}, 0.25)
	// animates the fill color
	// .fromTo('.st1', 1, {fill:'none', ease: Power1.easeInOut}, '-=0.5');


//Timeline
	// var t1 = new TimelineLite();
	// t1.to(".photo1", 5, {opacity:1})
	// .to(".photo2", 5, {opacity:1, delay:5})
	// .to({},5,{onComplete:resetall})	



// Main Parallax
/*var tween1 = new TimelineMax ()
	.add([
	TweenMax.to("#parallaxContainer .layer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
	TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "-125% 0", ease: Linear.easeNone}),
	//TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-200% 100%", ease: Linear.easeNone})
		]);
// Animate parallax
var scene1 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", offset:$(window).width(), duration: 8500 })
	.setTween(tween1)
	//.setPin("#parallaxContainer")
	.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

//casa, solo escena, set pin es lo más importante
var scene_casa = new ScrollMagic.Scene({triggerElement:'#casa',	offset: -50,duration: 3500})
	.setPin('#casa')
 	.addTo(controller)
	.addIndicators({name: "casa"});

//pop
var pop1 = new TweenMax.to('#pop1', .5, {opacity:1});
var scene_pop = new ScrollMagic.Scene({triggerElement:'#pop1', offset:0, duration:20,})
	.setTween(pop1)
 	.addTo(controller)
	.addIndicators({name: "pop"});
var scene_pop2 = new ScrollMagic.Scene({triggerElement: "#pop1", offset: 100,  duration: 1500})
	.setPin("#pop1")
	.addIndicators({name: "pop fijo"}) // add indicators (requires plugin)
	.addTo(controller);
var pop1b = new TweenMax.to('#pop1', .5, {opacity:0});
var scene_pop3 = new ScrollMagic.Scene({triggerElement:'#pop1', offset:1600, duration:200,})
	.setTween(pop1b)
 	.addTo(controller)
	.addIndicators({name: "popb"});

// Create tween muñeco
var mun = new TweenMax.fromTo('#muneco', .5, 
	{scale: .05, rotation: 0, top: 0},
   	{scale: 1, top: 50});
var scene_mun = new ScrollMagic.Scene({triggerElement:'#muneco', offset:0, duration:300,})
	.setTween(mun)
 	.addTo(controller)
	.addIndicators({name: "mun"});
var scene_num2 = new ScrollMagic.Scene({triggerElement: "#muneco", offset: 300,  duration: 4200})
	.setPin("#muneco")
	.addIndicators({name: "mun fijo"}) // add indicators (requires plugin)
	.addTo(controller);
var mun2 = new TweenMax.to('#muneco', .5, {opacity:0});
var scene_mun3 = new ScrollMagic.Scene({triggerElement:'#muneco', offset:4500, duration:200})
	.setTween(mun2)
 	.addTo(controller)
	.addIndicators({name: "mun2"});

//coche
var scene_coche = new ScrollMagic.Scene({triggerElement: "#coche", offset:-50, duration: $(window).width() - 100,})
	.setTween("#coche", 1, {scale: 1.5,})
	.setPin("#coche") 
	.addTo(controller)
	.addIndicators({name: "coche"}) // add indicators (requires plugin)

//saludo
var scene_saludo = new ScrollMagic.Scene({triggerElement: "#saludo", offset: 100, duration:1100})
	.setPin("#saludo") 
	.addTo(controller)
	.addIndicators({name: "saludo"})

//plane
var scene_plane = new ScrollMagic.Scene({triggerElement: "#plane", offset:0, duration:8000})
	.setTween("#plane", 1, {scale: 50, x:800, y:-800})
	.setPin("#plane")
	.addTo(controller)
	.addIndicators({name: "plane"})


//caja de verde a naranja
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
	.setTween("#animate1", 0.1, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	.addIndicators({name: "caja verde (duration: 0)"}) // add indicators (requires plugin)
	.addTo(controller);

//caja azul se queda fija
var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: 200,  duration: 300})
	.setPin("#pin1")
	.addIndicators({name: "caja azul (duration: 300)"}) // add indicators (requires plugin)
	.addTo(controller);

//parallax texto
var tween5 = new TimelineMax ()
	.add([
	TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
	TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
		]);
var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset:1500, duration: $(window).width()})
	.setTween(tween5)
	.addIndicators({name: "parallax texto"}) // add indicators (requires plugin)
	.addTo(controller);

//add scenes here
//conejo, hombre andando
var images = [
	"img/man1.png",
	"img/man2.png",
	"img/man3.png",
	"img/man4.png",
	"img/man5.png"
	];
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	// create tween
	var obj = {curImg: 0};
	var conejo = TweenMax.to(obj, 0.2, 
		{
		curImg: images.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index
		repeat: 20,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $("#conejo").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);
	// build scene
	var scene_conejo = new ScrollMagic.Scene({triggerElement: "#imagesequence", offset:-200, duration: 8000})
		.setTween(conejo)
		.setPin("#imagesequence")
		.addIndicators({name: "conejo"}) // add indicators (requires plugin)
		.addTo(controller);

//jquery transtions
//$('.box').transition({scale:2.2});
//ver http://ricostacruz.com/jquery.transit/
//ver: http://www.w3schools.com/jquery/jquery_events.asp

//Start - diversas formas para hacer scroll
    $("#bt1").click(function(){
        //$(document).scrollLeft($("#pin1").offset().left );  //scroll to id
        //$(document).scrollTop( $("#parallaxText").offset().top );  para vertical
		//$(document).scrollLeft(1300);  //jump 1300px to left
    	$('html, body').stop().animate({scrollLeft: $("#rv3").offset().left+2000}, 3000, "swing");
    	$("#rv3").slideToggle(2000);
    	$("#rvp3").hide();
    });

//boton texto toggle, en css display:none para que comience invisible
    $("#rvp1").click(function(){
        $("#rv1").toggle(3000, "swing");
    });

//animación de texto
    $("#rvp2").click(function(){
        $("#rv2").animate({left:200, opacity:1}, 3000);  //{left:'+=200'}
    });
    $("#rvp2b").click(function(){
        $("#rv2").animate({left:200, opacity:0}, 500);  //{left:'+=200'}
    });

//slidetoggle, en css display:none para que comience invisible
	$("#rvp3").click(function() {
        $("#rv3").slideToggle(1000);
        });

//ejemplos de animación con toggle:
//    $("button").click(function(){
//        $("div").animate({
//            height: 'toggle'
//		  });
//    });

//use keys to jump to anchors
$(document).keypress(function(e) {
    switch(e.keyCode) { //39 right, 37 left
        case 38: //scroll up
        	$(document).scrollLeft($("#coche").offset().left );
        break;
        case 40: //scroll down
            //right arrow pressed
        break;
    }
});
*/

$("#is1").on("click", function() { 
	hidehand();
	dostep1();
});
$("#is2").on("click", function() { 
	hidehand();
	dostep2();
});
$("#is3").on("click", function() { 
	hidehand();
	dostep3();
});
$("#is4").on("click", function() { 
	hidehand();
	dostep4();
});
$("#is5").on("click", function() { 
	hidehand();
	dostep5();
});
$("#is6").on("click", function() { 
	hidehand();
	dostep6();
});
$("#is7").on("click", function() { 
	hidehand();
	dostep7();
});
$("#is8").on("click", function() { 
	hidehand();
	dostep8();
});
$("#is9").on("click", function() { 
	hidehand();
	dostep9();
});
$("#is10").on("click", function() { 
	$('#handcont').css({"opacity": 0});
});
//move to next - previous section see: http://jsfiddle.net/yn6maby0/25/
var sections = $('.panelSection');
var i =0;

function next(){
    if(i == 0){
        $('.prev-section').show();
    }
    if(i < sections.length -1){
        i++;
        if(i == sections.length -1){
             $('.next-section').hide();   
        }
        //$(document).scrollLeft($(sections[i]).offset().left );
       	$('html, body').stop().animate({scrollLeft: $(sections[i]).offset().left}, 1000);
	}
}	
function prev(){
    if(i == sections.length -1){
        $('.next-section').show();
    }
    if(i > 0){
        i--;
        if(i == 0){
            $('.prev-section').hide();
        }
       	$('html, body').stop().animate({scrollLeft: $(sections[i]).offset().left}, 1000);
    }    
}
$('html').keydown(function(e){
    if(e.which == '38'){ //flecha arriba
        prev();    
    }
   if(e.which == '40'){ //flecha abajo
        next();    
    }
});
$('.next-section').click(function(e){
   e.preventDefault();
   next();
});

$('.prev-section').click(function(e){
   e.preventDefault();
   prev();
});    

//mouse wheel scrolls horizontal
$("html, body").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
    });

//smooth scroll
$('.secjump a').bind('click',function(event){
    var $anchor = $(this);
	    $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });

//progress line
function progressline(){
	var posXfix = $(window).width()/2; //posX is center of the screen in display fix
	var pageportion = $(window).scrollLeft()/$(window).width();
	var scale=$(window).width()/10;
	// var totalwidth = (sections.length-1)*scale;

	var offsetleft = $('#is1').position().left;
	offsetleft = offsetleft + $(window).width()/100*2;	//add 2vw that is the margen left;

	var totalwidth = $('#is10').position().left - $('#is1').position().left;

	var progresswidth = pageportion*totalwidth/9;	

	$('#progressline').css({"left": offsetleft, "width": totalwidth});
	$('#progresslineitem').css("width", progresswidth);
}

//show coordinates
function show() {
    //var posY = $(window).scrollTop();
    var posX = $(window).scrollLeft() + $(window).width()/2; 
    $("#coor").html("Left: " + posX + " px");
    $("#pagenumber").html("Page: " + i);
    progressline();
}
show();
$(window).scroll(show);
progressline();
dostep1();

});
