module.exports = (function(){  
  const sliderTop = $('.sliderReviews');
  sliderTop.owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',    
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: false,
    dots: false,
    items: 1
  });

  $('.timer').countTo();
})();