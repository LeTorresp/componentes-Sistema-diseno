


var swiper = new Swiper(".Interes", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.Siguiente-carrusel',
      prevEl: '.anterior-carrusel',
  },
    slidesPerView:2,
    autoplay: true,
    freeMode: true,
    speed: 1000,
    loop: true,
    rewind: true,

  });




  var swiper2 = new Swiper(".Informacion", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.Siguiente-carrusel-2',
      prevEl: '.anterior-carrusel-2',
      
  },
    slidesPerView:4,
    autoplay: true,
    freeMode: true,
    speed: 1000,
    loop: true,
    rewind: true,

  });


  
  var swiper3 = new Swiper(".Banner", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    autoplay: true,
    freeMode: true,
    speed: 1000,
    rewind: true,
    effect: 'fade',
  
  });


  
 


