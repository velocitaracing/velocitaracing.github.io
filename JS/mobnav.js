const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // const navbar = document.querySelector('.navbar');


            // toggle
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        // navbar.classList.toggle('black');
        // navbar.classList.toggle('display-white-logo');

            // nav-animation
        navLinks.forEach((link, index) => {
            // console.log(index);
         
    
               if(link.style.animation){
                   link.style.animation = '';
               }
               else{
                   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
               }
               
            //  console.log(index/7);
            });
            // burger-animation
        burger.classList.toggle('toggle');  
        
             

    });

    
    
}

navSlide();