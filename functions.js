$(document).ready(function(){
    $('.circle').hover(function(){
		$(this).css({'background':'#000077'});
	});
	$('.circle').mouseleave(function(){
		$(this).css({'background':'#444444'});
	});
    $('.circle').click(function()
    {
        $(this).toggleClass("active");
        $(this).css({'background': '#000077'});
    });
    $('#about').click(function(){
        $('#aboutContent').slideToggle();
    });
    $('#resume').click(function(){
        $('#resumeContent').slideToggle();
    });
    $('#portfolio').click(function(){
        $('#portfolioContent').slideToggle();
    });
    $('#contact').click(function(){
        $('#contactContent').slideToggle();
    });
    $('#blog').click(function(){
        $('#blogContent').slideToggle();
    });
     $('#music').click(function(){
        $('#musicContent').slideToggle();
    });
    
    function checkWindowSize() {

    }
    
$(window).load(checkWindowSize);
$(window).resize(checkWindowSize);
   
});