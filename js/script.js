$(function () {
  "use strict";

  var topoffset = 50;
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height();
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');

  $('.fullheight').css('height', wheight);

  $('#featured .item img').each(function () {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });
ze
  $(window).resize(function () {
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });

  var hash = $(this).find('li.active a').attr('href');
  if (hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  $('.navbar-fixed-top').on('activate.bs.scrollspy', function (){
    var hash = $(this).find('li.active a').attr('href');
    if (hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });

  $('.carousel').carousel({
    interval: 5000,
    pause: false
  });

  for (var i = 0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active"';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

 $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
   if (location.pathname.replace(/^\//,'') ===
     this.pathname.replace(/^\//,'') &&
     location.hostname === this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top-topoffset+2
       }, 500);
       return false;
     } h
   }
 });

});
