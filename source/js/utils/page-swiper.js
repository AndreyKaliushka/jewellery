import '../vendor/swiper';

const setNoveltySwiper = () => {
  if (document.body.contains(document.querySelector('.swiper__novelty'))) {
    // eslint-disable-next-line no-new
    new Swiper('.swiper__novelty', {
      // Optional parameters
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      navigation: {
        nextEl: '.novelty__button--next',
        prevEl: '.novelty__button--prev',
      },

      pagination: {
        el: '.novelty__swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  }
};

export {setNoveltySwiper};
