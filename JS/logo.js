
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.logo a').addClass('black-logo');
    }
    else{
        $('.logo a').removeClass('black-logo');
    }
    
})



$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.white-logo-VR').addClass('display-white-logo');
    }
    else{
        $('.white-logo-VR').removeClass('display-white-logo');
    }
    
})

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.black-logo-VR').addClass('display-black-logo');
    }
    else{
        $('.black-logo-VR').removeClass('display-black-logo');
    }
    
})





