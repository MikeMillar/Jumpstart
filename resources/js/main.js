$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  let scrollLength = 0;

  $(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    if (scrollTop - scrollLength > 50) {
      let navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      scrollLength = scrollTop;
    } else if (scrollLength - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      scrollLength = scrollTop;
    }
  });



});
