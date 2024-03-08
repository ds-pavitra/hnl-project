  /*--
      Client's Activation
  -----------------------------------*/    
  var brands = new Swiper('.brand-slider.swiper-container', {
    slidesPerView: 1,
    // init: false,
    loop: true,
    pagination: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 140,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 140,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 200,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 140,
      },
    }
  });
  