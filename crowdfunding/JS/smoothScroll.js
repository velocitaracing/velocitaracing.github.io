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

$('#sup-now').on('click', function(e) {
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

$('#sup-now-two').on('click', function(e) {
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

$('#sup-now-three').on('click', function(e) {
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


$('#load-but').on('click', function(e) {
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

$('.pay-mobile-card').on('click', function(e) {
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

