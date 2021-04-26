$('.crowdfunding-scroll-button').on('click', function(e) {
    // console.log(this);

  if(this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
              scrollTop: $(hash).offset().top
            },
              800
      );
         
    }

});

