//<![CDATA[
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay().fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(400).css({'overflow':'visible'});
        })
 //]]>
$('img').bind('contextmenu', function(e) {
    return false;
    }); 

 