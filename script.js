
var direction = 'vertical';
if (screen.width < 960) {
  direction = 'horizontal';
}

var swiper = new Swiper('.swiper-container', {
    direction: direction,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    mousewheel: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><div class="value-container"><p id="value' + (index + 1) + '"></p></div><canvas id="myChart' + (index + 1) + '"></canvas></div>';
      },
    },
});

