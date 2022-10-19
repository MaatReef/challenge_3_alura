$(document).ready(function () {

  // Mostrar y ocultar botón "wpp"

  var btnIrWpp = $('#contactwpp');

  $(window).on('scroll', function () {

    var proyectosOffsetTop = $('#menu_pro').offset().top -50;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

      btnIrWpp.css('margin-left', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

      btnIrWpp.css('margin-left', '-60px');

    }

  })
  // Mostrar y ocultar botón "Volver arriba"

  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function () {

    var proyectosOffsetTop = $('#acercaDe').offset().top -110;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

      btnVolverArriba.css('margin-right', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop) {

      btnVolverArriba.css('margin-right', '-60px');

    }

  })

  // Movimiento suave de scroll de "Inicio" y "Volver arriba"

  $('a.volver-arriba').on('click', function (e) {
    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }

  })

  // Movimiento suave de scroll de los demás items del menú principal
  $('a.scroll-suave').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 26
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-acercaDe').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 36
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-carousel_principal').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 192
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-contacto').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 32
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-extras').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 82
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.logo-mini').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 52
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
});
