$(document).ready(function(){

    $('.circle').hover(function(){
		$(this).animate({'opacity':'0.5'}, 1);
	});
	$('.circle').mouseleave(function(){
		$(this).animate({'opacity':'1'}, 1);
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

        if ( $(window).width() < 600 ) {
            $('#rightContent').hide();
            $('#leftAside').hide();
            $('#topHeader').hide();
            $('#body').css({'left' : '5%', 'right' : '5%', 'width' : '90%'});
            $('#leftContent').css({width: '100%', 'right' : '0'});
        }
        else {
            $('#leftAside').show();
            $('#topHeader').show();
            $('#rightContent').show();
            $('#leftContent').css({'right' : '40%', width: '55%'});
            $('#body').css({'left' : '30%', 'right' :'5%', 'width' : '65%'});
        }

    }
    
$(window).load(checkWindowSize);
$(window).resize(checkWindowSize);
   
});