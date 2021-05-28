const burger = document.getElementById('burger');
const navUL = document.getElementById('nav-ul');
// const body = document.querySelector('body');

document.onclick = function (e){
    if(e.target.id !== 'burger' && (e.target.id !== 'nav-ul' && ( ( (e.target.className !== 'main-link') & (e.target.className !== 'navlink-border') & (e.target.className !== 'main-nav-icon') ) )))
    {
        navUL.classList.remove('nav-active');
        burger.classList.remove('toggle');
        
    }
}

burger.onclick = function() {
    navUL.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
}


