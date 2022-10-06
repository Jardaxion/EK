;;$(document).ready(function () {
    //Index hover
    $('.index__center').hover(function(){
        $('.index__left').addClass('disactive');
        $('.index__right').addClass('disactive');

        $('.index__background').addClass('active');

        $('.index__about-left').addClass('active');
        $('.index__about-right').addClass('active');
    });

    $('.index__center').mouseleave(function () { 
        $('.index__about-left').removeClass('active');
        $('.index__about-right').removeClass('active');

        $('.index__background').removeClass('active');

        $('.index__left').removeClass('disactive');
        $('.index__right').removeClass('disactive');
    });

    //Adaptive width in portfolio
    $('.gallery__right').width($(window).width()-$('.gallery__left').width());
    $('.gallery__right').height($('.gallery__left').height());

    //Articles show and hide description
    $('.article').hover(function(){
        $(this).find('.articles__content-description').slideDown();
    })
    $('.article').mouseleave(function(){
        $(this).find('.articles__content-description').slideUp();
    })

    // Sliders
    //review
    $('.reviews__left-content').slick({
        slideToShow: 1,
        slideToScroll: 1,
        dots: false,
        prevArrow: $('.reviews__leftArrow'),
        nextArrow: $('.reviews__rightArrow'),
        fade: true,
        asNavFor: $('.reviews__content-right')
    })
    $('.reviews__content-right').slick({
        slideToShow: 1,
        slideToScroll: 1,
        dots: false,
        prevArrow: $('.reviews__leftArrow'),
        nextArrow: $('.reviews__rightArrow'),
        fade: true,
        asNavFor: $('.reviews__left-content')
    })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiJdfQ==
