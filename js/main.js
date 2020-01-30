$(document).ready(function(){
    $('.your-class').slick({
        // accessibility: false,
       
        //appendArrows: '.header',
        prevArrow: '.button-prev',
        nextArrow: '.button-next',
    });

    jQuery ('.menu-btn').on ('click',function(){
        jQuery ('.navigation').slideToggle(); 
    });
  });

  