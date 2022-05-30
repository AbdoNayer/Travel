// Window Load screen

$(window).on('load', function () {

    // Lazy Load
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});


$(document).ready(function () {

  // owl Carousel
  $('#sliderHead').owlCarousel({
      loop:true,
      margin:0,
      center:true,
      autoplay:true,
      autoplayTimeout: 7000,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      dragEndSpeed: 7000,
      pagination : false,
      nav:true,
      navText: [
          '<i class="icon-arrow-left"></i>',
          '<i class="icon-arrow-right"></i>'
      ],
      responsive:{
          0:{
              items:1
          },
          900:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

});