$(document).ready(function() {
  var auth = new auth0.WebAuth({
      clientID: '1CJ1buz1iXGYy5ktIaTZqGVigZLQWgUm',
      domain: 'himnark.eu.auth0.com',
      responseType: 'code',
      audience: 'https://himnark.eu.auth0.com/api/v2/',
      redirectUri: 'https://people.himnark.am',
      scope: 'openid email profile'
  });
  $('.open-login-page').click(function() {
      auth.authorize({
          mode: 'signIn'
      });
  });
  $('.open-signup-page').click(function() {
      auth.authorize({
          mode: 'signUp'
      });
  });
});

$(document).ready(function() {

   var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top -55
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 90;
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  





// $(document).ready(function() {
//    var offsetSize = $(".nav-menu").innerHeight();
//    $("html, body").animate({scrollTop:$(window.location.hash).offset().top-offsetSize }, 1000);
// });






   $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
          $('.nav-menu').addClass('shadowingNav');
      } else {
          $('.nav-menu').removeClass('shadowingNav');
      }
  });


  $(window).scroll(function() {
      if ($(window).scrollTop() > 500) {
          $(".try-anim").fadeIn("slow", function() {
     $(this).removeClass("animated");       
    $(this).addClass("animated2");
    });
      } else {
          $('.try-anim').removeClass('animated2');
          $('.try-anim').addClass('animated');
      }
  });


  $('.animated-icon').click(function() {
    $(this).toggleClass('open');
  });

  $('.nav-link, .navbar-brand, .footer-item').click(function() {
    $(".animated-icon").removeClass('open');
    $(".navbar-collapse").removeClass('show');
  });

  $("#card1").click(function() {
    $(".card1 ").addClass("left")
    $("#header1").addClass("card-title")
    $(".card2").removeClass("left2");
    $("#header2").removeClass("card-title")
    $(".card3").removeClass("left3");
    $("#header3").removeClass("card-title")
 
  });

  $("#card2").click(function() {
    $(".card2").addClass("left2",1000);
    $("#header2").addClass("card-title",1000)
    $(".card1").removeClass("left",1000);
    $("#header1").removeClass("card-title",1000)
    $(".card3").removeClass("left3",1000);
    $("#header3").removeClass("card-title",1000)
  });

  $("#card3").click(function() {
    $(".card3").addClass("left3");
     $("#header3").addClass("card-title")
     $(".card2").removeClass("left2");
     $("#header2").removeClass("card-title")
     $(".card1").removeClass("left");
     $("#header1").removeClass("card-title")
     // $(".ph_anim1").addClass("hide")
     // $(".ph_anim3").removeClass("hide")
     //  $(".ph_anim3").addClass("animation-show")

  });

   $("#card4").click(function() {
    $(".card4 ").addClass("left4")
    $("#header4").addClass("card-title")
    $(".card5").removeClass("left5");
    $("#header5").removeClass("card-title")
    $(".card6").removeClass("left6");
    $("#header6").removeClass("card-title")
  });

  $("#card5").click(function() {
    $(".card5").addClass("left5");
    $("#header5").addClass("card-title")
    $(".card4").removeClass("left4");
    $("#header4").removeClass("card-title")
    $(".card6").removeClass("left6");
    $("#header6").removeClass("card-title")
  });

  $("#card6").click(function() {
    $(".card6").addClass("left6");
     $("#header6").addClass("card-title")
     $(".card5").removeClass("left5");
     $("#header5").removeClass("card-title")
     $(".card4").removeClass("left4");
     $("#header4").removeClass("card-title")
  });

    
     $("#card1-mob").click(function() {
    $(".card1-mob ").addClass("left")
    $("#header1-mob").addClass("card-title")
    $(".card2-mob").removeClass("left2");
    $("#header2-mob").removeClass("card-title")
    $(".card3-mob").removeClass("left3");
    $("#header3-mob").removeClass("card-title")
    $(".card4-mob").removeClass("left4");
    $("#header4-mob").removeClass("card-title")
    $(".card5-mob").removeClass("left5");
    $("#header5-mob").removeClass("card-title")
    $(".card6-mob").removeClass("left3");
    $("#header6-mob").removeClass("card-title")
 
  });

  $("#card2-mob").click(function() {
    $(".card2-mob").addClass("left2",1000);
    $("#header2-mob").addClass("card-title",1000)
    $(".card1-mob").removeClass("left",1000);
    $("#header1-mob").removeClass("card-title",1000)
    $(".card3-mob").removeClass("left3",1000);
    $("#header3-mob").removeClass("card-title",1000)
    $(".card4-mob").removeClass("left4");
    $("#header4-mob").removeClass("card-title")
    $(".card5-mob").removeClass("left5");
    $("#header5-mob").removeClass("card-title")
    $(".card6-mob").removeClass("left3");
    $("#header6-mob").removeClass("card-title")
  });

  $("#card3-mob").click(function() {
     $(".card3-mob").addClass("left3");
     $("#header3-mob").addClass("card-title")
     $(".card2-mob").removeClass("left2");
     $("#header2-mob").removeClass("card-title")
     $(".card1-mob").removeClass("left");
     $("#header1-mob").removeClass("card-title")
     $(".card4-mob").removeClass("left4");
     $("#header4-mob").removeClass("card-title")
     $(".card5-mob").removeClass("left5");
     $("#header5-mob").removeClass("card-title")
     $(".card6-mob").removeClass("left3");
     $("#header6-mob").removeClass("card-title")


  });

   $("#card4-mob").click(function() {
    $(".card4-mob ").addClass("left4")
    $("#header4-mob").addClass("card-title")
    $(".card5-mob").removeClass("left5");
    $("#header5-mob").removeClass("card-title")
    $(".card6-mob").removeClass("left3");
    $("#header6-mob").removeClass("card-title")
    $(".card1-mob").removeClass("left",1000);
    $("#header1-mob").removeClass("card-title",1000)
    $(".card2-mob").removeClass("left2");
    $("#header2-mob").removeClass("card-title")
    $(".card3-mob").removeClass("left3");
    $("#header3-mob").removeClass("card-title")
  });

  $("#card5-mob").click(function() {
    $(".card5-mob").addClass("left5");
    $("#header5-mob").addClass("card-title")
    $(".card4-mob").removeClass("left4");
    $("#header4-mob").removeClass("card-title")
    $(".card6-mob").removeClass("left3");
    $("#header6-mob").removeClass("card-title")
      $(".card1-mob").removeClass("left",1000);
    $("#header1-mob").removeClass("card-title",1000)
    $(".card2-mob").removeClass("left2");
    $("#header2-mob").removeClass("card-title")
    $(".card3-mob").removeClass("left3");
    $("#header3-mob").removeClass("card-title")
  });

  $("#card6-mob").click(function() {
    $(".card6-mob").addClass("left3");
     $("#header6-mob").addClass("card-title")
     $(".card5-mob").removeClass("left5");
     $("#header5-mob").removeClass("card-title")
     $(".card4-mob").removeClass("left4");
     $("#header4-mob").removeClass("card-title")
       $(".card1-mob").removeClass("left",1000);
    $("#header1-mob").removeClass("card-title",1000)
    $(".card2-mob").removeClass("left2");
    $("#header2-mob").removeClass("card-title")
    $(".card3-mob").removeClass("left3");
    $("#header3-mob").removeClass("card-title")
  });

  $("#headingOne").click(function() {
    $(".chevron1").toggleClass("rotate")
    $(".chevron2, .chevron3, .chevron4, .chevron5, .chevron6").removeClass("rotate") 
   
  });

  $("#headingTwo").click(function() {
    $(".chevron2").toggleClass("rotate")
    $(".chevron1").addClass("rotate")
     $(" .chevron3, .chevron4, .chevron5, .chevron6").removeClass("rotate") 
  });

  $("#headingThree").click(function() {
    $(".chevron3").toggleClass("rotate")
    $(".chevron1").addClass("rotate")
    $(".chevron2,  .chevron4, .chevron5, .chevron6").removeClass("rotate") 
  });

  $("#headingFour").click(function() {
    $(".chevron4").toggleClass("rotate")
    $(".chevron1").addClass("rotate")
    $(".chevron2,  .chevron3,  .chevron5, .chevron6").removeClass("rotate")
  });

  $("#headingFive").click(function() {
    $(".chevron5").toggleClass("rotate")
    $(".chevron1").addClass("rotate") 
    $(".chevron2,  .chevron3,  .chevron4, .chevron6").removeClass("rotate")
  });

  $("#headingSix").click(function() {
    $(".chevron6").toggleClass("rotate")
    $(".chevron1").addClass("rotate") 
   $(".chevron2,  .chevron3,  .chevron5, .chevron4").removeClass("rotate")
  });



  

  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });



  

  $('#card1').click(function(){
    $('.ph_anim1').attr('src', 'assets/images/details.mp4');
    });
   $('#card2').click(function(){
    $('.ph_anim1').attr('src', 'assets/images/records.mp4');
    });
    $('#card3').click(function(){
    $('.ph_anim1').attr('src', 'assets/images/payroll-calc.mp4');
    });
     $('#card4').click(function(){
    $('.ph_anim2').attr('src', 'assets/images/payments.mp4');
    });
      $('#card5').click(function(){
    $('.ph_anim2').attr('src', 'assets/images/return.mp4');
    });
       $('#card6').click(function(){
    $('.ph_anim2').attr('src', 'assets/images/accounting-6.mp4');
    });

 
});

