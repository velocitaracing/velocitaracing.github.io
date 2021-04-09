var velocity = 0.5;

$(".banner-1").css("background-position", "50% ");
$(".banner-2").css("background-position", "50% ");
$(".banner-3").css("background-position", "50% ");
$(".banner-4").css("background-position", "50% ");

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
    var height = 130;
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
    }); 
  };
    
  $(window).bind('scroll', update18);    
 
     

     
     

     

