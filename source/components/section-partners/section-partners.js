module.exports = (function(){  
  const sliderTop = $('.sliderPartners');
  sliderTop.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    autoWidth: true,
    items: 3,
    margin: 5,
    responsive : {
      0 : {
        items: 3,
        margin: 5
      },
      768: {
        items: 3,
        margin: 10
      },
      960: {
        items: 5,
        margin: 40
      },
      1240 : {
        items: 6,
        margin: 30
      },
      1340 : {
        items: 7,
        margin: 35
      },
      1440 : {
        items: 8,
        margin: 50
      }
    }
  });
})();