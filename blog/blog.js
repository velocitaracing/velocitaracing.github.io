
$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });








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





  
