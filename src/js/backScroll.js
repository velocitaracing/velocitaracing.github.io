var velocity = 0.15;
var velocityTwo = 0.2;

function scrollZero(){ 
  var pos = $(window).scrollTop(); 
  $('#home').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('#home').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocityTwo) +  'px'); 
    }); 
  };
      
$(window).bind('scroll', scrollZero);    

function scrollOne(){ 
    var pos = $(window).scrollTop(); 
    $('.intro-car').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.intro-car').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
$(window).bind('scroll', scrollOne); 

function scrollTwo(){ 
    var pos = $(window).scrollTop(); 
    $('.intro-career').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.intro-career').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
$(window).bind('scroll', scrollTwo);    

function scrollThree(){ 
    var pos = $(window).scrollTop(); 
    $('.intro-sponsor').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.intro-sponsor').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
$(window).bind('scroll', scrollThree);    

function scrollFour(){ 
    var pos = $(window).scrollTop(); 
    $('.intro-shop').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.intro-shop').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
$(window).bind('scroll', scrollFour);    