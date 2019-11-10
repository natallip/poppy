module.exports = (function(){  
  const sliderTop = $('.sliderTop');
  sliderTop.owlCarousel({
    loop: true,
    dots: false,
    items: 1
  });  
  $(".sliderTop__nav-next").click(function(){
    sliderTop.trigger("next.owl.carousel");
  });
   
  $(".sliderTop__nav-prev").click(function(){
    sliderTop.trigger("prev.owl.carousel");
  });
})();