
    /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    var myPlugin = {
      name: 'debugger',
      params: {
        debugger: false,
      },
      on: {
        init: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('init');
        },
        click: function (swiper, e) {
          if (!swiper.params.debugger) return;
          // console.log('click');
        },
        tap: function (swiper, e) {
          if (!swiper.params.debugger) return;
          // console.log('tap');
        },
        doubleTap: function (swiper, e) {
          if (!swiper.params.debugger) return;
          // console.log('doubleTap');
        },
        sliderMove: function (swiper, e) {
          if (!swiper.params.debugger) return;
          // console.log('sliderMove');
        },
        slideChange: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('slideChangeTransitionEnd');
        },
        transitionStart: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('transitionStart');
        },
        transitionEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('transitionEnd');
        },
        fromEdge: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('fromEdge');
        },
        reachBeginning: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('reachBeginning');
        },
        reachEnd: function (swiper) {
          if (!swiper.params.debugger) return;
          // console.log('reachEnd');
        },
      },
    };

    // Install Plugin To Swiper
    Swiper.use(myPlugin);

    // Init Swiper
    var swiper = new Swiper('.swiper-container-cars', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
    });   


    var swiper3 = new Swiper('.swiper-container-shop', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
