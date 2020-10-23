$(document).ready(function(){
    $(window).scroll(function () {
      triggerSlideInt( $(this), [ $('div.about-left-one'), $('div.car-image-left'), $('div.left-info'), $('div.career-left')]);  //,$('div.left-one'), $('div.left-two')
    });
  });
  
  $.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        document.documentElement.clientHeight
    );
  };
  
  $.getScrollPercentage = function(){
    return 100 * Math.min(
      ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
      $(window).scrollTop()
      );
  };
  
  var triggerSlideInt = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
      if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
        if(!items[i].hasClass('transitionSlideIn'))
        {
          items[i].addClass('transitionSlideIn');
        }
      } else { items[i].removeClass('transitionSlideIn'); }
    }
  };




  
  $(document).ready(function(){
    $(window).scroll(function () {
      triggerSlideInsu( $(this), [ $('div.right-info'),$('div.car-image-right'), $('div.team-right'), $('div.joinus-right')]);     // $('div.right-one'), $('div.right-two'),
    });
  });
  
  $.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        document.documentElement.clientHeight
    );
  };
  
  $.getScrollPercentage = function(){
    return 100 * Math.min(
      ($(window).height() + $(window).scrollTop()) / $.getDocHeight(),
      $(window).scrollTop()
      );
  };
  
  var triggerSlideInsu = function(t, items) {
    
    for (var i = 0; i < items.length; i++) {
      if((( $.getDocHeight() - $(window).height()) - ( $.getDocHeight() - items[i].offset().top )) <= t.scrollTop()) {
        if(!items[i].hasClass('transitionSlideInright'))
        {
          items[i].addClass('transitionSlideInright');
        }
      } else { items[i].removeClass('transitionSlideInright'); }
    }
  };

