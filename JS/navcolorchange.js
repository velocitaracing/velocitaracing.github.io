$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.navbar').addClass('black');
        $('.navbar').addClass('animate-nav');
        $('.goto-top').addClass('visible');
    }
    else{
        $('.navbar').removeClass('black');
        $('.navbar').removeClass('animate-nav');
        $('.goto-top').removeClass('visible');
    }
    
})


