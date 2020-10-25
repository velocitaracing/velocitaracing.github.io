var modalButton = document.querySelector('.modal-btn-one');
var modalBg = document.querySelector('.modal-bg-one');
var modalClose = document.querySelector('.modal-close-one');
var buttonclose = document.querySelector('.modal-close-btn');
var formBg = document.querySelector('.modal-bg-form');
var formClose = document.querySelector('.modal-close-form');
var closeForm = document.querySelector('.form-close-btn');

modalButton.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});

buttonclose.addEventListener('click' ,function(){
    modalBg.classList.remove('bg-active');
});

buttonclose.addEventListener('click', function(){
    formBg.classList.add('bg-active');
});

formClose.addEventListener('click', function(){
    formBg.classList.remove('bg-active');
});

closeForm.addEventListener('click', function(){
    formBg.classList.remove('bg-active');
});

var modalButtontwo = document.querySelector('.modal-btn-two');
var modalBgtwo = document.querySelector('.modal-bg-two');
var modalClosetwo = document.querySelector('.modal-close-two');

modalButtontwo.addEventListener('click', function(){
    modalBgtwo.classList.add('bg-active');
});

modalClosetwo.addEventListener('click', function(){
    modalBgtwo.classList.remove('bg-active');
});


var modalButtontwo = document.querySelector('.modal-btn-three');
var modalBgtwo = document.querySelector('.modal-bg-two');
var modalClosetwo = document.querySelector('.modal-close-two');

modalButtontwo.addEventListener('click', function(){
    modalBgtwo.classList.add('bg-active');
});

modalClosetwo.addEventListener('click', function(){
    modalBgtwo.classList.remove('bg-active');
});


var modalButtontwo = document.querySelector('.modal-btn-four');
var modalBgtwo = document.querySelector('.modal-bg-two');
var modalClosetwo = document.querySelector('.modal-close-two');

modalButtontwo.addEventListener('click', function(){
    modalBgtwo.classList.add('bg-active');
});

modalClosetwo.addEventListener('click', function(){
    modalBgtwo.classList.remove('bg-active');
});


