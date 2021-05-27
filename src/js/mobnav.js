const burger = document.getElementById('burger');
const navUL = document.getElementById('nav-ul');
// const body = document.querySelector('body');

var links = document.querySelectorAll('click-link');

document.onclick = function (e){
    if(e.target.id !== 'burger' && e.target.id !== 'nav-ul')
    {
        navUL.classList.remove('nav-active');
        burger.classList.remove('toggle');
        // body.classList.remove('nav-active-body');
    }
}




burger.onclick = function() {
    navUL.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    // body.classList.toggle('nav-active-body');
}


