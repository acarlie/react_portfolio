
$(document).ready(function () {
  //creates typewriter
  var type = new Typewriter('type', ["Amelia Carlie", "Development", "& Design"]);

  //sets bg
  bg.setBg();

  //generates portfolio
  port.generate();

  //on resize, resets trianglify bg
  $( window ).resize(function() {
    bg.setBg();
  });
  
  //page loader
  $('#loader-inner').fadeIn(200);
  $('#loader').delay(3000).fadeOut(500);

  //starts typing animation after page load
  setTimeout(  function(){   type.type();  }, 3000  );

  //setting animate on scroll attributes
  $('.icon-container-info, .profile-wrapper').attr('data-aos', 'fade-up');
  $('.social-links').attr('data-aos', 'zoom-in');
});