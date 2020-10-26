const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // const navbar = document.querySelector('.navbar');




            // toggle
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        // navbar.classList.toggle('black');
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



const navbar = document.querySelector('.nav-links');
const burgersec = document.querySelector('.burger');


// $(window).click(function() {
//     //Hide the menus if visible
//     navbar.classList.remove('nav-active');
//     burgersec.classList.remove('toggle');
//     });
    
//     // $('.burger').click(function(event){
//     //     event.stopPropagation();
//     // });

    // $('.toggle').click(function(event){
    //     event.stopPropagation();
    // });
  


    // window.addEventListener('click', function(e){   
    //     if (document.querySelector('.navbar').contains(e.target)){
    //       // Clicked in box
    //       navbar.classList.add('nav-active');
    //       burgersec.classList.add('toggle');
    //     } else{
    //         navbar.classList.remove('nav-active');
    //          burgersec.classList.remove('toggle');
    //       // Clicked outside the box
    //     }
    //   });