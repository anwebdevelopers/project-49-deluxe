$(function() {

    'use strict';



    //---------------------------------------------------------------
    //Menu
    //---------------------------------------------------------------

    $('.header__nav-open-button').click(function() {
        $('.header__nav').css({
            '-webkit-transform': 'translateX(0)',
            '-moz-transform': 'translateX(0)',
            '-ms-transform': 'translateX(0)',
            '-o-transform': 'translateX(0)',
            'transform': 'translateX(0)',
        });
    });

    $('.header__nav-close-button').click(function() {
        $('.header__nav').css({
            '-webkit-transform': 'translateX(-100%)',
            '-moz-transform': 'translateX(-100%)',
            '-ms-transform': 'translateX(-100%)',
            '-o-transform': 'translateX(-100%)',
            'transform': 'translateX(-100%)',
        });
    });

    //---------------------------------------------------------------
    //Поиск
    //---------------------------------------------------------------
    $('.header__search-button').click(function() {
        $(this).addClass('active');
        $('.header__search').fadeIn(600).css({'display': 'flex'});
    });
    //Выключение при клике по ссылке
    $('.header__search-close, .header__search-submit').click(function() {
        $('.header__search-button').removeClass('active');
        $('.header__search').fadeOut(600);
    });

    //---------------------------------------------------------------
    //header slider
    //---------------------------------------------------------------

    $('.header__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        dots: false,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 10000
    });

    //---------------------------------------------------------------
    //Выравнивание блоков по высоте
    //---------------------------------------------------------------

    $(".production__name").equalHeight();

    //---------------------------------------------------------------
    //header slider
    //---------------------------------------------------------------

    $('.projects__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 10000
    });

    //---------------------------------------------------------------
    //dropdown fix for IOS
    //---------------------------------------------------------------

    $('.page-nav__dropdown').hover(function(e) {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });

    //--------------------------------------------------------------
    //Табы
    //--------------------------------------------------------------
    $('.tabs__buttons button').first().addClass('active');
    $(".tabs__item").not(":first").hide();
    $('.tabs__buttons').on('click', 'button:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.tabs__item').hide().eq($(this).index()).fadeIn(300);
    });

    //------------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------------
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------
    //fullscreen header for IE
    //------------------------------------------------------------

    var $header = $('.header');


    function fullscreen() {
        if($('html').hasClass('ie') || $('html').hasClass('gecko')) {
            if ($('body').hasClass('home')) {
                $header.removeAttr('style');
                var windowHeight = $(window).height(),
                    windowWidth = $(window).width(),
                    headerHeight = $header.height();
                if (windowHeight >= $header.height() && windowWidth > 992) {
                    $header.css({
                        'height' : windowHeight + 'px'
                    });
                }
            }
        }
    }

    fullscreen();

    $(window).resize(function() {
        fullscreen();
    });

});
