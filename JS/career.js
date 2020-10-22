// $(document).ready(function(){
//     $(window).scroll(function () {
//       triggerSlideInsv( $(this), [ $('div.card-one'),$('div.card-two'),$('div.card-three'),$('div.card-four'),$('div.card-five'),$('div.card-six'),$('div.card-seven'),$('div.card-eight'),$('div.card-nine'),$('div.card-ten'),$('div.card-eleven'),$('div.card-twelve')]);
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
  
//   var triggerSlideInsv = function(t, items) {
    
//     for (var i = 0; i < items.length; i++) {
//       if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
//         if(!items[i].hasClass('transitionSlideInbottom'))
//         {
//           items[i].addClass('transitionSlideInbottom');
//         }
//       } else { items[i].removeClass('transitionSlideInbottom'); }
//     }
//   };

