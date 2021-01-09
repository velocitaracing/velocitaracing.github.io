$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.navbar').addClass('black');
        $('.navbar').addClass('animate-nav');
    }
    else{
        $('.navbar').removeClass('black');
        $('.navbar').removeClass('animate-nav');
    }
    
})


