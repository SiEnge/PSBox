$(document).ready(function(){
    $('.card-add-info .clous-card').click(function(){
        $('.card-add-info').removeClass('active');
    });
    $('#slid-home').carouFredSel({
        auto: false,
        pagination: '.top-page-slid',
        prev: '.top-sli-p-l',
        next: '.top-sli-p-r',
        responsive: true,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
            easing: "swing",
            fx: "fade",
        }
    });
    $('#review-slid').carouFredSel({
        auto: false,
        prev: '#reviews-nav-l',
        next: '#reviews-nav-r',
        responsive: true,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
        }
    });
    $('#best-product').carouFredSel({
        auto: false,
        prev: '#best-nav-l',
        next: '#best-nav-r',
        responsive: true,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
        }
    });
    $('#reviews-about').carouFredSel({
        auto: false,
        prev: '#reviews-about-nav-l',
        next: '#reviews-about-nav-r',
        responsive: true,
        mousewheel: true,
        items: {
            visible: {
                min: 1,
                max: 2
            }
        },
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
        }
    });
    $('#slid-1').carouFredSel({
        auto: false,
        responsive: true,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
            easing: "swing",
            fx: "fade",
        }
    });
    $('#slid-2').carouFredSel({
        auto: false,
        responsive: true,
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        scroll : {
            items: 1,
            easing: "swing",
            fx: "fade",
        }
    });
    $('.slid-mini__miniatur.min-1 .min > a').click(function() {
        $('#slid-1').trigger('slideTo', '#' + this.href.split('#').pop() );
        $('.slid-mini__miniatur.min-1 .min > a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
    $('.slid-mini__miniatur.min-2 .min > a').click(function() {
        $('#slid-2').trigger('slideTo', '#' + this.href.split('#').pop() );
        $('.slid-mini__miniatur.min-2 .min > a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
    $('[data-fancybox="favorit"]').fancybox();
    for(var i = 0; i < $('#best-product > li').length; i++){
        $('[data-fancybox="gallery-'+i+'"]').fancybox();
    }
    /**/
    $( ".btn-favor" ).click(function() {
        $('.top__basket-bg').removeClass('active');
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
            $(this).parent().find('.top__basket-bg').removeClass('active');
            $(this).parent().find('.pop__basket').removeClass('active');
        }
        else{
            $(this).parent().addClass('active');
            $(this).parent().find('.top__basket-bg').addClass('active');
            $(this).parent().find('.pop__basket').addClass('active');
        }
    });

    $( ".btn-basket" ).click(function() {
        $('.top__basket-bg').removeClass('active');
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
            $(this).parent().find('.top__basket-bg').removeClass('active');
            $(this).parent().find('.pop__basket').removeClass('active');
            $(this).parent().find('.colectiv-zac').removeClass('active');
        }
        else{
            $(this).parent().addClass('active');
            $(this).parent().find('.top__basket-bg').addClass('active');
            $(this).parent().find('.pop__basket').addClass('active');
        }
    });


    $( ".complec-link" ).click(function() {
        $('.top__basket > div').eq(1).find('.pop__basket').removeClass('active');
        $('.top__basket > div').eq(1).find('.colectiv-zac').addClass('active');
    });
    $('.colectiv-zac .title > a').click(function() {
        $('.top__basket > div .colectiv-zac').removeClass('active');
        $('.top__basket > div').eq(1).find('.pop__basket').addClass('active');
    });
    $( ".top__basket > div .top__basket-bg" ).click(function() {
        $('.top__basket > div').removeClass('active');
        $('.top__basket > div .pop__basket').removeClass('active');
        $('.top__basket > div .colectiv-zac').removeClass('active');
        $(this).removeClass('active');
    });

    $(".phone").mask("+7 (999) 99-99-999");
    $('.top__bottom .menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.top__bottom .menu, .wrap').toggleClass('active');
    });
    /**/
});
var preload = $("#main_preload"),
    w = $(window).width() / 2 - 30,
    h = $(window).height() / 2 - 30;
preload.html('<img src="../img/30.svg" alt="load content."/>');
preload.css({"top": h + 'px', "left": w + 'px'});
$(window).on('load',function () {
    setTimeout(function () {
        preload.animate({opacity: "0"}, 50, function () {
            preload.html("")
        });
        $(".wrap").animate({opacity: "1"}, 50)
    }, 1000)
});