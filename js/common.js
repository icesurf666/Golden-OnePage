// menu mobile
$(document).ready(function() {
  $('.menu-mobile, .menu-mobile__close').on('click', function(){
    $('.menu-m').toggle();
    return false;
  })
});

// scroll
$(document).ready(function(){
  $(".menu, .mobile").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1400);
  });
});

$(document).ready(function () {
  $('.menu-m__item').on('click', function () {
    $('.menu-m').hide();
  })
});
