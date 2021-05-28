const button = document.getElementById('load');
const rating = document.getElementById('rating');

button.onclick = function (e) {
    button.style.color = 'transparent'

    setTimeout(function(){
       
        button.style.width = '38px'
    }, 100);
    

    setTimeout(function(){
        $("#load").addClass("animationButton");
    }, 500);

    setTimeout(function(){
        $("#load").removeClass("animationButton");
    }, 3000);

    setTimeout(function(){
        button.style.width = '140px'
    }, 3000);

    setTimeout(function(){
        button.style.color = '#fff'
    }, 3100);
    
}