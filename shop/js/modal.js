var modalButtonfaq = document.querySelector('.product-open-rc');
var modalBgfaq = document.querySelector('.modal-bg-rc');
var modalClosefaq = document.querySelector('.modal-close-rc');
var faqClose = document.querySelector('.product-close-button-rc');

modalButtonfaq.addEventListener('click', function(){
    modalBgfaq.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

modalClosefaq.addEventListener('click', function(){
    modalBgfaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

faqClose.addEventListener('click', function(){
    modalBgfaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});



var modalButtonMsd = document.querySelector('.product-open-msd');
var modalBgMsd = document.querySelector('.modal-bg-msd');
var modalCloseMsd = document.querySelector('.modal-close-msd');
var faqCloseMsd = document.querySelector('.product-close-button-msd');

modalButtonMsd.addEventListener('click', function(){
    modalBgMsd.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

modalCloseMsd.addEventListener('click', function(){
    modalBgMsd.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

faqCloseMsd.addEventListener('click', function(){
    modalBgMsd.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});


var modalButtonHod = document.querySelector('.product-open-hod');
var modalBgHod = document.querySelector('.modal-bg-hod');
var modalCloseHod = document.querySelector('.modal-close-hod');
var faqCloseHod = document.querySelector('.product-close-button-hod');

modalButtonHod.addEventListener('click', function(){
    modalBgHod.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

modalCloseHod.addEventListener('click', function(){
    modalBgHod.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

faqCloseHod.addEventListener('click', function(){
    modalBgHod.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});




