const careerToggle = () =>{
    const career = document.querySelector('.career-toggle');
    //console.log(career);
    const dropdown = document.querySelector('.dept-box');
    // console.log(dropdown);

            // toggle
    career.addEventListener('click',()=>{
        dropdown.classList.toggle('career-active');
       

    });

    
}

careerToggle();