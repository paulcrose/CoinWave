
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
        stretch: -25,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><div id="shadow' + (index + 1) + '"></div><div class="value-container"><p id="value' + (index + 1) + '"></p></div><div class="percent-container"><p id="percent' + (index + 1) + '"></p></div><div class="logo"></div><canvas id="myChart' + (index + 1) + '"></canvas></div>';
      },
    },
});

