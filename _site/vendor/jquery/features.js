$(document).ready(function() {
    
   $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
          $('.nav-menu').addClass('shadowingNav');
      } else {
          $('.nav-menu').removeClass('shadowingNav');
      }
  });



  $('.animated-icon').click(function() {
    $(this).toggleClass('open');
  });

  $('.nav-link, .navbar-brand, .footer-item').click(function() {
    $(".animated-icon").removeClass('open');
    $(".navbar-collapse").removeClass('show');
  });

  });

   

