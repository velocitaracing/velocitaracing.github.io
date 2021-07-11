var velocity = 0.5;
function scrollCrowd(){ 
    var pos = $(window).scrollTop(); 
    $('#home').each(function() { 
      var $element = $(this);
      // console.log(height);
      // subtract some from the height b/c of the padding
      var scrollHeight = $('#home').position().top;
      // console.log(scrollHeight);
      var height = scrollHeight;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
      }); 
    };
        
  $(window).bind('scroll', scrollCrowd);


// function scrollsecone(){ 
//     var pos = $(window).scrollTop(); 
//     $('#sec-one').each(function() { 
//       var $element = $(this);
//       // console.log(height);
//       // subtract some from the height b/c of the padding
//       var scrollHeight = $('#sec-one').position().top;
//       // console.log(scrollHeight);
//       var height = scrollHeight;
//       $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
//       }); 
//     };
        
//   $(window).bind('scroll', scrollsecone);


// var heading = $("#propHeading");
// var iconButton = $(".slabs");
// iconButton.on("click", function() {
//     $("#propHeading").removeClass('aos-animate');
//     $("#propOne").removeClass('aos-animate');
//     $("#goodies").removeClass('aos-animate');
//     $("#myImage").removeClass('aos-animate');
//     setTimeout(function() {
//         $("#propHeading").addClass('aos-animate');
//         $("#propOne").addClass('aos-animate');
//         $("#goodies").addClass('aos-animate');
//         $("#myImage").addClass('aos-animate');
//     }, 200);
// });