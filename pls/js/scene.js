$(function(){

var w = window.innerWidth;
var h = window.innerHeight;


document.getElementById("homeicon").addEventListener("click", fnHome);
function fnHome() {
	location.reload();
}

document.getElementById("btn_1_start").addEventListener("click", fnStart);
function fnStart() {
	document.getElementById("btn_1_start").style.visibility = "hidden";
    x = document.getElementById("sec_2")
    x.style.visibility = "visible";
    x.classList.add("cl_opacity");
    x.style.left = "0vw"

	var line1 = $("#line1");
	var line2 = $("#line2");
	var line3 = $("#line3");
	var line4 = $("#line4");
	var line5 = $("#line5");
	var line6 = $("#line6");

	var ele1 = $("#nun_num_1").last();
	var x1 = ele1.offset().left + (ele1.width())/2;
	var y1 = ele1.offset().top + (ele1.height())/2;
	var ele2 = $("#nun_num_2").last();
	var x2 = ele2.offset().left + (ele2.width())/2;
	var y2 = ele2.offset().top + (ele2.height())/2;
	var ele3 = $("#nun_num_3").last();
	var x3 = ele3.offset().left + (ele3.width())/2;
	var y3 = ele3.offset().top + (ele3.height())/2;
	var ele4 = $("#nun_num_4").last();
	var x4 = ele4.offset().left + (ele4.width())/2;
	var y4 = ele4.offset().top + (ele4.height())/2;
	var ele5 = $("#nun_num_5").last();
	var x5 = ele5.offset().left + (ele5.width())/2;
	var y5 = ele5.offset().top + (ele5.height())/2;
	var ele6 = $("#nun_num_6").last();
	var x6 = ele6.offset().left + (ele6.width())/2;
	var y6 = ele6.offset().top + (ele6.height())/2;
	var ele7 = $("#nun_num_7").last();
	var x7 = ele7.offset().left + (ele7.width())/2;
	var y7 = ele7.offset().top + (ele7.height())/2;

	line1.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);
	line2.attr('x1',x2).attr('y1',y2).attr('x2',x3).attr('y2',y3);
	line3.attr('x1',x3).attr('y1',y3).attr('x2',x4).attr('y2',y4);
	line4.attr('x1',x4).attr('y1',y4).attr('x2',x5).attr('y2',y5);
	line5.attr('x1',x5).attr('y1',y5).attr('x2',x6).attr('y2',y6);
	line6.attr('x1',x6).attr('y1',y6).attr('x2',x7).attr('y2',y7);

}
document.getElementById("sec_2").addEventListener('animationend', function() { 
	x = document.getElementById("sec_1")
    x.style.visibility = "hidden";
    x.style.left = "-100vw"
})

$('.close').click(function(){
//	$('#sec_3').css("z-index", "-10");
//	$('.pannel').css("left", "-100vw");
	$(".pannel").animate({top: '200vw'}, 2000,);
})

/*****************/
/*   Section 3   */
/*****************/

$('#num_1').click(function(){
	//$('#sec_3').css("visibility", "visible");
	//$('#sec_3').css("left", "0vw");
	//$('#sec_3').css("z-index", "100");
	$("#sec_3").animate({top: '3vw', opacity: '1'}, 1000);

})

var pos1 = 0;
$('#slide_btn_3_1').click(function(){
	if(pos1 == 0){
		$('#slide_arrow_1').addClass("rotate_title");	
		$('#slide_3_1').css({'z-index':'100'});
		$('#slide_body_3_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_1').css( {'transform': 'rotate(180deg)'});
		})
		pos1 = 1;
	}else{
		$('#slide_body_3_1').slideToggle(400, 'linear',function(){
			$('#slide_3_1').css({'z-index':'0'});
			$('#slide_arrow_1').removeClass("rotate_title");	
			$('#slide_arrow_1').css( {'transform': 'rotate(0deg)'});
		})
		pos1 = 0;
	}
})
var pos2 = 0;
$('#slide_btn_3_2').click(function(){
	if(pos2 == 0){
		$('#slide_arrow_2').addClass("rotate_title");	
		$('#slide_3_2').css({'z-index':'100'});
		$('#slide_body_3_2').slideToggle(400, 'linear',function(){
			$('#slide_arrow_2').css( {'transform': 'rotate(180deg)'});
		})
		pos2 = 1;
	}else{
		$('#slide_body_3_2').slideToggle(400, 'linear',function(){
			$('#slide_3_2').css({'z-index':'0'});
			$('#slide_arrow_2').removeClass("rotate_title");	
			$('#slide_arrow_2').css( {'transform': 'rotate(0deg)'});
		})
		pos2 = 0;
	}
})
var pos3 = 0;
$('#slide_btn_3_3').click(function(){
	if(pos3 == 0){
		$('#slide_arrow_3').addClass("rotate_title");	
		$('#slide_3_3').css({'z-index':'100'});
		$('#slide_body_3_3').slideToggle(400, 'linear',function(){
			$('#slide_arrow_3').css( {'transform': 'rotate(180deg)'});
		})
		pos3 = 1;
	}else{
		$('#slide_body_3_3').slideToggle(400, 'linear',function(){
			$('#slide_3_3').css({'z-index':'0'});
			$('#slide_arrow_3').removeClass("rotate_title");	
			$('#slide_arrow_3').css( {'transform': 'rotate(0deg)'});
		})
		pos3 = 0;
	}
})
var pos4 = 0;
$('#slide_btn_3_4').click(function(){
	if(pos4 == 0){
		$('#slide_arrow_4').addClass("rotate_title");	
		$('#slide_3_4').css({'z-index':'100'});
		$('#slide_body_3_4').slideToggle(400, 'linear',function(){
			$('#slide_arrow_4').css( {'transform': 'rotate(180deg)'});
		})
		pos4 = 1;
	}else{
		$('#slide_body_3_4').slideToggle(400, 'linear',function(){
			$('#slide_3_4').css({'z-index':'0'});
			$('#slide_arrow_4').removeClass("rotate_title");	
			$('#slide_arrow_4').css( {'transform': 'rotate(0deg)'});
		})
		pos4 = 0;
	}
})


var audio = document.getElementById("mySoundClip1"); 

$('#playsound').click(function(){
	audio.play();
	$('#playsound').css( {'left': '-10vw'}); 	
	$('#playsoundpause').css( {'left': '5vw'}); 	
})
$('#playsoundpause').click(function(){
	audio.pause(); 	
	$('#playsound').css( {'left': '5vw'}); 	
	$('#playsoundpause').css( {'left': '-10vw'}); 
})

/*****************/
/*   Section 4   */
/*****************/

$('#num_2').click(function(){
	$("#sec_4").animate({top: '3vw', opacity: '1'}, 1000,);

})
var pos41 = 0;
$('#slide_btn_4_1').click(function(){
	if(pos41 == 0){
		$('#slide_arrow_4_1').addClass("rotate_title");	
		$('#slide_4_1').css({'z-index':'100'});
		$('#slide_body_4_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_4_1').css( {'transform': 'rotate(180deg)'});
		})
		pos41 = 1;
	}else{
		$('#slide_body_4_1').slideToggle(400, 'linear',function(){
			$('#slide_4_1').css({'z-index':'0'});
			$('#slide_arrow_4_1').removeClass("rotate_title");	
			$('#slide_arrow_4_1').css( {'transform': 'rotate(0deg)'});
		})
		pos41 = 0;
	}
})

/*****************/
/*   Section 5   */
/*****************/

$('#num_3').click(function(){
	$("#sec_5").animate({top: '3vw', opacity: '1'}, 1000,);

})
var pos51 = 0;
$('#slide_btn_5_1').click(function(){
	if(pos51 == 0){
		$('#slide_arrow_5_1').addClass("rotate_title");	
		$('#slide_5_1').css({'z-index':'100'});
		$('#slide_body_5_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_5_1').css( {'transform': 'rotate(180deg)'});
		})
		pos51 = 1;
	}else{
		$('#slide_body_5_1').slideToggle(400, 'linear',function(){
			$('#slide_5_1').css({'z-index':'0'});
			$('#slide_arrow_5_1').removeClass("rotate_title");	
			$('#slide_arrow_5_1').css( {'transform': 'rotate(0deg)'});
		})
		pos51 = 0;
	}
})

/*****************/
/*   Section 6   */
/*****************/

$('#num_4').click(function(){
	$("#sec_6").animate({top: '3vw', opacity: '1'}, 1000,);

})
var pos61 = 0;
$('#slide_btn_6_1').click(function(){
	if(pos61 == 0){
		$('#slide_arrow_6_1').addClass("rotate_title");	
		$('#slide_6_1').css({'z-index':'100'});
		$('#slide_body_6_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_6_1').css( {'transform': 'rotate(180deg)'});
		})
		pos61 = 1;
	}else{
		$('#slide_body_6_1').slideToggle(400, 'linear',function(){
			$('#slide_6_1').css({'z-index':'0'});
			$('#slide_arrow_6_1').removeClass("rotate_title");	
			$('#slide_arrow_6_1').css( {'transform': 'rotate(0deg)'});
		})
		pos61 = 0;
	}
})


/*****************/
/*   Section 7   */
/*****************/

$('#num_5').click(function(){
	$("#sec_7").animate({top: '3vw', opacity: '1'}, 1000,);

})
var pos71 = 0;
$('#slide_btn_7_1').click(function(){
	if(pos71 == 0){
		$('#slide_arrow_7_1').addClass("rotate_title");	
		$('#slide_7_1').css({'z-index':'100'});
		$('#slide_body_7_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_7_1').css( {'transform': 'rotate(180deg)'});
		})
		pos71 = 1;
	}else{
		$('#slide_body_7_1').slideToggle(400, 'linear',function(){
			$('#slide_7_1').css({'z-index':'0'});
			$('#slide_arrow_7_1').removeClass("rotate_title");	
			$('#slide_arrow_7_1').css( {'transform': 'rotate(0deg)'});
		})
		pos71 = 0;
	}
})

/*****************/
/*   Section 8   */
/*****************/

$('#num_7').click(function(){
	$("#sec_8").animate({top: '3vw', opacity: '1'}, 1000,);

})
var pos81 = 0;
$('#slide_btn_8_1').click(function(){
	if(pos81 == 0){
		$('#slide_arrow_8_1').addClass("rotate_title");	
		$('#slide_8_1').css({'z-index':'100'});
		$('#slide_body_8_1').slideToggle(400, 'linear',function(){
			$('#slide_arrow_8_1').css( {'transform': 'rotate(180deg)'});
		})
		pos81 = 1;
	}else{
		$('#slide_body_8_1').slideToggle(400, 'linear',function(){
			$('#slide_8_1').css({'z-index':'0'});
			$('#slide_arrow_8_1').removeClass("rotate_title");	
			$('#slide_arrow_8_1').css( {'transform': 'rotate(0deg)'});
		})
		pos81 = 0;
	}
})




/*Hide all sections with visibility = hidden*/
function hideAllSec() {
    allsec = document.getElementsByClassName("sec")
    for (i = 0; i < allsec.length; i++) {
  		allsec[i].style.visibility = "hidden";
	} 
}



/*

element.classList.add("mystyle");

element.classList.toggle("mystyle");

var x = document.getElementsByClassName("sec");

$("#voltaic_holder").css({"position":"relative", "top":"-75px"});

$("#voltaic_holder").removeAttr("style")

    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });

    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");




*/

}); 