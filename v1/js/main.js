var right = `
  <div class="right">
    <i class="fas fa-angle-double-right"></i>
  </div>
`;
var left = `
  <div class="left">
    <i class="fas fa-angle-double-left"></i>
  </div>
`;
$(function () {
  if($(window).width() <= 480) {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: right,
      prevArrow: left,
      focusOnSelect: false,
      mobileFirst: true,
    });
  } else {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: right,
      prevArrow: left,
      focusOnSelect: false,
      mobileFirst: true,
    });
  }
  
  $('.mobile-icon').on('click', function () {
    $('nav').slideToggle();
  });
  

});