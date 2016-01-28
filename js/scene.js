var controller = new ScrollMagic.Controller({vertical: false});

$(function () { // wait for document ready

//intercapitular
var sc1 = new ScrollMagic.Scene({triggerElement: "#intercap", offset: -400})
	.setTween("#intercap", .7, {backgroundColor: "green", scale: 1.8, opacity: 0.5}) // trigger a TweenMax.to tween
	.addIndicators({name: "intercap)"}) // add indicators (requires plugin)
	.addTo(controller);

//xix chapter
var sc1 = new ScrollMagic.Scene({triggerElement: "#xixcap", offset: -400})
	.setTween("#xixcap", .7, {backgroundColor: "green", scale: 2}) // trigger a TweenMax.to tween
	.addIndicators({name: "xixcap)"}) // add indicators (requires plugin)
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

//botton despligue text hidden
    $("#m_1").click(function(){
        $("#m_1_h").slideToggle(1000);
		//$(".svg1").fadeToggle(2000);        
    });
    $("#m_2").click(function(){
        $("#m_2_h").slideToggle(1000);
    });
    $("#m_3").click(function(){
	    $("#m_3_h").slideToggle(1000);
    });


    $("#m_1_1").click(function(){$("#m_1_1_h").slideToggle(1000);});
    $("#m_1_2").click(function(){$("#m_1_2_h").slideToggle(1000);});
    $("#m_1_3").click(function(){$("#m_1_3_h").slideToggle(1000);});
    $("#m_1_4").click(function(){$("#m_1_4_h").slideToggle(1000);});
    $("#m_1_5").click(function(){$("#m_1_5_h").slideToggle(1000);});
    $("#m_1_6").click(function(){$("#m_1_6_h").slideToggle(1000);});
    $("#m_1_7").click(function(){$("#m_1_7_h").slideToggle(1000);});

    $("#m_2_1").click(function(){$("#m_2_1_h").slideToggle(1000);});
    $("#m_2_2").click(function(){$("#m_2_2_h").slideToggle(1000);});
    $("#m_2_3").click(function(){$("#m_2_3_h").slideToggle(1000);});
    $("#m_2_4").click(function(){$("#m_2_4_h").slideToggle(1000);});

    $("#m_3_1").click(function(){$("#m_3_1_h").slideToggle(1000);});
    $("#m_3_2").click(function(){$("#m_3_2_h").slideToggle(1000);});
    $("#m_3_3").click(function(){$("#m_3_3_h").slideToggle(1000);});
    $("#m_3_4").click(function(){$("#m_3_4_h").slideToggle(1000);});
    $("#m_3_5").click(function(){$("#m_3_5_h").slideToggle(1000);});

    $("#p_1_1").click(function(){$("#p_1_1_h").slideToggle(1000);});
    $("#p_1_2").click(function(){$("#p_1_2_h").slideToggle(1000);});
    $("#p_1_3").click(function(){$("#p_1_3_h").slideToggle(1000);});

    $("#p_2_1").click(function(){$("#p_2_1_h").slideToggle(1000);});
    $("#p_2_2").click(function(){$("#p_2_2_h").slideToggle(1000);});
    $("#p_2_3").click(function(){$("#p_2_3_h").slideToggle(1000);});

    $("#p_3_1").click(function(){$("#p_3_1_h").slideToggle(1000);});
    $("#p_3_2").click(function(){$("#p_3_2_h").slideToggle(1000);});
    $("#p_3_3").click(function(){$("#p_3_3_h").slideToggle(1000);});
    $("#p_3_4").click(function(){$("#p_3_4_h").slideToggle(1000);});
    $("#p_3_5").click(function(){$("#p_3_5_h").slideToggle(1000);});

    $("#p_4_1").click(function(){$("#p_4_1_h").slideToggle(1000);});
    $("#p_4_2").click(function(){$("#p_4_2_h").slideToggle(1000);});

    $("#p_5_1").click(function(){$("#p_5_1_h").slideToggle(1000);});
    $("#p_5_2").click(function(){$("#p_5_2_h").slideToggle(1000);});

    $("#p_6_1").click(function(){$("#p_6_1_h").slideToggle(1000);});
    $("#p_6_2").click(function(){$("#p_6_2_h").slideToggle(1000);});
    $("#p_6_3").click(function(){$("#p_6_3_h").slideToggle(1000);});

    $("#r_1_1").click(function(){$("#r_1_1_h").slideToggle(1000);});

    $("#r_2_1").click(function(){$("#r_2_1_h").slideToggle(1000);});
    $("#r_2_2").click(function(){$("#r_2_2_h").slideToggle(1000);});   
    $("#r_2_3").click(function(){$("#r_2_3_h").slideToggle(1000);});
    $("#r_2_4").click(function(){$("#r_2_4_h").slideToggle(1000);});   

    $("#r_3_1").click(function(){$("#r_3_1_h").slideToggle(1000);});
    $("#r_3_2").click(function(){$("#r_3_2_h").slideToggle(1000);});

    $("#r_4_1").click(function(){$("#r_4_1_h").slideToggle(1000);});
    $("#r_4_2").click(function(){$("#r_4_2_h").slideToggle(1000);});   
    $("#r_4_3").click(function(){$("#r_4_3_h").slideToggle(1000);});
    $("#r_4_4").click(function(){$("#r_4_4_h").slideToggle(1000);}); 

//boton texto toggle, en css display:none para que comience invisible
//     $("#rvp1").click(function(){
//         $("#rv1").toggle(3000, "swing");
//     });

// //animación de texto
//     $("#rvp2").click(function(){
//         $("#rv2").animate({left:200, opacity:1}, 3000);  //{left:'+=200'}
//     });
//     $("#rvp2b").click(function(){
//         $("#rv2").animate({left:200, opacity:0}, 500);  //{left:'+=200'}
//     });

// //slidetoggle, en css display:none para que comience invisible
// 	$("#rvp3").click(function() {
//         $("#rv3").slideToggle(1000);
//         });

//ejemplos de animación con toggle:
//    $("button").click(function(){
//        $("div").animate({
//            height: 'toggle'
//		  });
//    });

//Lineas**************************************************************
//var pos_m_1 = $("#m_1").position(); 
//var poswidth = $("#m_1").width();
var fromX01 = $("#m_1").offset().left + $("#m_1").width();
var toX01 = $("#m_1_1").offset().left;
$(".svg1").append('<line x1=' + fromX01 + ' y1="30%" x2=' + toX01 + ' y2="30%" />');
//$("#m_1").append("from: " + fromX01 + " To: " + toX01);

//$("svg").append('<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>');
$(".svg1").append('<path d="M' + fromX01 + ',45 c300,0 300,0 300,27 c0,27 0,27, 300,27" style="fill:none;"/>');
//$(".svg1").append('<path d="M' + fromX01 + ',45 c450,0 50,50 450,50" style="fill:none;"/>');

$("#svg_lines").html($("#svg_lines").html());







// //caja de verde a naranja
// var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 	.setTween("#animate1", 0.1, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
// 	.addIndicators({name: "caja verde (duration: 0)"}) // add indicators (requires plugin)
// 	.addTo(controller);

// //caja azul se queda fija
// var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: 200,  duration: 300})
// 	.setPin("#pin1")
// 	.addIndicators({name: "caja azul (duration: 300)"}) // add indicators (requires plugin)
// 	.addTo(controller);

// //parallax texto
// var tween5 = new TimelineMax ()
// 	.add([
// 	TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
// 	TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
// 		]);
// var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset:1500, duration: $(window).width()})
// 	.setTween(tween5)
// 	.addIndicators({name: "parallax texto"}) // add indicators (requires plugin)
// 	.addTo(controller);

//add scenes here



//mouse wheel scrolls horizontal
$("html, body").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
    });

//smooth scroll
$('a').bind('click',function(event){
    var $anchor = $(this);
	    $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 10000);
        event.preventDefault();
    });

//muestra contador en la esquina
function show() {
    var offset = $("#child").offset();
    //var posY = $(window).scrollTop();
    var posX = $(window).scrollLeft() + $(window).width()/2; 
    $("#coordinates").html("Left: " + posX + " px");
	}
show();
$(window).scroll(show);



//Esta función bloquea el scroll con las flechas del teclado
/*window.addEventListener("keydown", function(e) {
    	// space and arrow keys
    	if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
       e.preventDefault();
    	}
	}, false);*/

});

