const careerToggle = () =>{
    const career = document.querySelector('.career-toggle');
    //console.log(career);
    const dropdown = document.querySelector('.dept-box');
    // console.log(dropdown);
    // const navLinks = document.querySelectorAll('.nav-links li');

            // toggle
    career.addEventListener('click',()=>{
        dropdown.classList.toggle('career-active');
        // console.log(career);
            // nav-animation
        // navLinks.forEach((link, index) => {
        //     // console.log(index);
    
        //     //    if(link.style.animation){
        //     //        link.style.animation = '';
        //     //    }
        //     //    else{
        //     //        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        //     //    }
               
        //    //  console.log(index/7);
        //     });
            // burger-animation
        // career.classList.toggle('toggle');    

    });




    
}

careerToggle();