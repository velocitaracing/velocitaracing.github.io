var velocity = 0.5;

// $(".banner-1").css("background-position", "50% ");
// $(".banner-2").css("background-position", "50% ");
// $(".banner-3").css("background-position", "50% ");
// $(".banner-4").css("background-position", "50% ");
// $(".banner-5").css("background-position", "50% ");
// $(".banner-6").css("background-position", "50% ");


function update41(){ 
  var pos = $(window).scrollTop(); 
   $('.banner-6').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = 0;
    $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px'); 
     }); 
    };
      
 $(window).bind('scroll', update41); 

function update(){ 
var pos = $(window).scrollTop(); 
$('.banner-1').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = 0;
    $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px');
    // $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
   }); 
   };

 $(window).bind('scroll', update);
 

 function update5(){ 
  var pos = $(window).scrollTop(); 
  $('.banner-2').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = 0;
      $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px'); 
     }); 
     };
  
   $(window).bind('scroll', update5);


   function update6(){ 
    var pos = $(window).scrollTop(); 
    $('.banner-3').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = 0;
        $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px'); 
       }); 
       };
    
     $(window).bind('scroll', update6);

function update7(){ 
  var pos = $(window).scrollTop(); 
   $('.banner-4').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = 0;
    $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px'); 
     }); 
    };
      
 $(window).bind('scroll', update7);
 
 function update40(){ 
  var pos = $(window).scrollTop(); 
   $('.banner-5').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = 0;
    $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px'); 
     }); 
    };
      
 $(window).bind('scroll', update40);   
 
 


 function update2(){ 
  var pos = $(window).scrollTop(); 
  $('.dept-box').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var height = 0;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
     }); 
     };
  
   $(window).bind('scroll', update2);
  


   function update3(){ 
    var pos = $(window).scrollTop(); 
    $('#about').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = 0;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
       }); 
       };
    
     $(window).bind('scroll', update3);


function update4(){ 
  var pos = $(window).scrollTop(); 
  $('#team').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = 0;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
    
  $(window).bind('scroll', update4);    
 


  
function update18(){ 
  var pos = $(window).scrollTop(); 
  $('#career-heading-new').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('#career-heading-new').position().top;
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
    
  $(window).bind('scroll', update18);    
 
  
  function update19(){ 
    var pos = $(window).scrollTop(); 
    $('.static-car').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.static-car').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
      
    $(window).bind('scroll', update19);    

   
   
  function update20(){ 
    var pos = $(window).scrollTop(); 
    $('#team').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('#team').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
    $(window).bind('scroll', update20);    
    
function update21(){ 
  var pos = $(window).scrollTop(); 
  $('#podcast').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('#podcast').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
     $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
  $(window).bind('scroll', update21);      

     
  function update22(){ 
    var pos = $(window).scrollTop(); 
    $('.static-career').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('.static-career').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
       $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
        }); 
      };
  
$(window).bind('scroll', update22);  

  function update23(){ 
  var pos = $(window).scrollTop(); 
  $('.static-sponsor').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('.static-sponsor').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
         
$(window).bind('scroll', update23);      
    

function update24(){ 
  var pos = $(window).scrollTop(); 
  $('.static-car .cover-2').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('.static-car').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
         
$(window).bind('scroll', update24);  


function update25(){ 
  var pos = $(window).scrollTop(); 
  $('.static-career .cover-2').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('.static-career').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
         
$(window).bind('scroll', update25);
    
function update26(){ 
  var pos = $(window).scrollTop(); 
  $('.static-car .cover-1').each(function() { 
    var $element = $(this);
    // console.log(height);
    // subtract some from the height b/c of the padding
    var scrollHeight = $('.static-car').position().top;
    // console.log(scrollHeight);
    var height = scrollHeight;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
         
$(window).bind('scroll', update26);
    
          


  if( screen.width() < 500 ) {
      // code
    $(".banner-1").css("background-position", "50% ");
    $(".banner-2").css("background-position", "50% ");
    $(".banner-3").css("background-position", "50% ");
    $(".banner-4").css("background-position", "50% ");
    $(".banner-5").css("background-position", "50% ");
    $(".banner-6").css("background-position", "50% ");
  }

