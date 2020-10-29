// $(document).ready(function(){
//     $(window).scroll(function () {
//       triggerSlideIns( $(this), [ $('div.itm'), $('div.info-sec'), $('div.ant-itm'), $('div.VR-1') ]);
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
  
//   var triggerSlideIns = function(t, items) {
    
//     for (var i = 0; i < items.length; i++) {
//       if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
//         if(!items[i].hasClass('transitionSlideIn'))
//         {
//           items[i].addClass('transitionSlideIn');
//         }
//       } else { items[i].removeClass('transitionSlideIn'); }
//     }
//   };




  
//   $(document).ready(function(){
//     $(window).scroll(function () {
//       triggerSlideInse( $(this), [ $('div.info'), $('div.itm-sec'),  $('div.VR-2')]);
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
  
//   var triggerSlideInse = function(t, items) {
    
//     for (var i = 0; i < items.length; i++) {
//       if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
//         if(!items[i].hasClass('transitionSlideInright'))
//         {
//           items[i].addClass('transitionSlideInright');
//         }
//       } else { items[i].removeClass('transitionSlideInright'); }
//     }
//   };

