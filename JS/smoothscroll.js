$('.navbar ul li a').on('click', function(e) {
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




  $('.logo a').on('click', function(e) {
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


$('.career-click').on('click', function(e) {
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


$('.shop-banner-button').on('click', function(e) {
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

$('.podcast-banner-button').on('click', function(e) {
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

$('.goto-top-link').on('click', function(e) {
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







