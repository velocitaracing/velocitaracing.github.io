//   $(document).ready(function(){
//     $(window).scroll(function () {
//       triggerSlideInsb( $(this), [ $('div.')]);
//     });
//   });
  
//   $.getDocHeight = function(){
//     return Math.max(
//         $(document).height(),
//         $(window).height(),
//         document.documentElement.clientHeight
//     );
//   };
  
//   $.getScrollPercentage = function(){
//     return 100 * Math.min(
//       ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
//       $(window).scrollTop()
//       );
//   };
  
//   var triggerSlideInsb = function(t, items) {
    
//     for (var i = 0; i < items.length; i++) {
//       if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
//         if(!items[i].hasClass('transitionSlideInbottomt'))
//         {
//           items[i].addClass('transitionSlideInbottom');
//         }
//       } else { items[i].removeClass('transitionSlideInbottom'); }
//     }
//   };



