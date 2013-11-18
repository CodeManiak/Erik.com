$(document).ready(function(){
    // These events take care of the background animation on the buttons
    $('#createAccountText').click(function(){
        $('#regForm').fadeToggle();
        $('#regForm').css({'display' : 'inline'});
    });
    $('#loginText').click(function(){
        $('#loginForm').fadeToggle();
        $('#loginForm').css({'display' : 'inline'});
    });
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
    $('.accountText').hover(function(){
        $(this).css({'color':'#000077'});
    });
    $('.accountText').mouseleave(function(){
        $(this).css({'color':'#444444'});
    });
    // All of the below functions handle slide toggling. There are n slide toggle commands for n buttons
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
   
});