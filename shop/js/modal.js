var modalButtonfaq = document.querySelector('.modal-btn-product');
var modalBgfaq = document.querySelector('.modal-bg-product');
var modalClosefaq = document.querySelector('.modal-close-product');
var faqClose = document.querySelector('.product-close-button');

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
