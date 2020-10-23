// const btn = document.querySelector(".ripple-btn"); 
  
// // Listen for click event 
// btn.onclick = function (e) { 

//     // Create span element 
//     let ripple = document.createElement("span"); 

//     // Add ripple class to span 
//     ripple.classList.add("ripple"); 

//     // Add span to the button  
//     this.appendChild(ripple); 

//     // Get position of X 
//     let x = e.clientX - e.target.offsetLeft; 

//     // Get position of Y  
//     let y = e.clientY - e.target.offsetTop; 

//     // Position the span element 
//     ripple.style.left = `${x}px`; 
//     ripple.style.top = `${y}px`; 

//     // Remove span after 0.3s 
//     setTimeout(() => { 
//         ripple.remove(); 
//     }, 300); 

// }; 



$(".ripple-btn").click(function (e) {

    // Remove any old one
    $(".ripple").remove();
  
    // Setup
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();
  
    // Add the element
    $(this).prepend("<span class='ripple'></span>");
  
  
   // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight; 
    }
  
    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;
  
  
    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
  });