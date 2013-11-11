$(document).ready(function(){

    $('.circle').hover(function(){
		$(this).css({'background':'#000077'}, 1);
	});
	$('.circle').mouseleave(function(){
		$(this).css({'background':'#444444'}, 1);
	});
    $('#home').click(function(){
        $('#homeContent').toggle();
    });
    $('#resume').click(function(){
        $('#resumeContent').toggle();
    });
    $('#portfolio').click(function(){
        $('#portfolioContent').toggle();
    });
    $('#contact').click(function(){
        $('#contactContent').toggle();
    });
    
    function checkWindowSize() {

   

    }
    
$(window).load(checkWindowSize);
$(window).resize(checkWindowSize);
   
});