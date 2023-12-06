$(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      grabCursor: true,
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      keyboard: {
        enabled: true,
      },
      // autoplay: true,
      // autoplay: {
      //   delay: 3000,
      // },
      // speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});
  