var modalButton = document.querySelector('.modal-btn-one');
var modalBg = document.querySelector('.modal-bg-one');
var modalClose = document.querySelector('.modal-close-one');
var buttonclose = document.querySelector('.modal-close-btn');
var formBg = document.querySelector('.modal-bg-form');
var formClose = document.querySelector('.modal-close-form');
var closeForm = document.querySelector('.form-close-btn');
var sponsorcloseForm = document.querySelector('.sponsor-form-close-btn');
modalButton.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

buttonclose.addEventListener('click' ,function(){
    modalBg.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

buttonclose.addEventListener('click', function(){
    formBg.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

formClose.addEventListener('click', function(){
    formBg.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

closeForm.addEventListener('click', function(){
    formBg.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});



var modalButtonfaq = document.querySelector('.modal-btn-faq');
var modalBgfaq = document.querySelector('.modal-bg-faq');
var modalClosefaq = document.querySelector('.modal-close-faq');
var faqClose = document.querySelector('.faq-close-button');

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





var modalButtontwo = document.querySelector('.modal-btn-three');
var modalBgtwo = document.querySelector('.modal-bg-two');
var modalClosetwo = document.querySelector('.modal-close-two');

modalButtontwo.addEventListener('click', function(){
    modalBgtwo.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

modalClosetwo.addEventListener('click', function(){
    modalBgtwo.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

sponsorcloseForm.addEventListener('click', function(){
    modalBgtwo.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
})


var sponsorFaq = document.querySelector('.modal-btn-four');
var sponsorBgFaq = document.querySelector('.modal-bg-sponsor-faq');
var sponsorClose = document.querySelector('.modal-close-sponsor-faq');
var sponsorExit = document.querySelector('.sponsor-faq-close-button');

sponsorFaq.addEventListener('click', function(){
    sponsorBgFaq.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

sponsorClose.addEventListener('click', function(){
    sponsorBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

sponsorExit.addEventListener('click', function(){
    sponsorBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});


var shopFaq = document.querySelector('.modal-btn-five');
var shopBgFaq = document.querySelector('.modal-bg-product');
var shopClose = document.querySelector('.modal-close-product');
var shopExit = document.querySelector('.faq-close-product');

shopFaq.addEventListener('click', function(){
    shopBgFaq.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

shopClose.addEventListener('click', function(){
    shopBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

shopExit.addEventListener('click', function(){
    shopBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});


var shopFaq = document.querySelector('.modal-btn-six');
var shopBgFaq = document.querySelector('.modal-bg-product');
var shopClose = document.querySelector('.modal-close-product');
var shopExit = document.querySelector('.faq-close-product');

shopFaq.addEventListener('click', function(){
    shopBgFaq.classList.add('bg-active');
    document.querySelector("body").style.overflow = 'hidden';
});

shopClose.addEventListener('click', function(){
    shopBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});

shopExit.addEventListener('click', function(){
    shopBgFaq.classList.remove('bg-active');
    document.querySelector("body").style.overflow = 'visible';
});





