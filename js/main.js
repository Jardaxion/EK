$(document).ready(function () {
    sticky();
    allFunctions();
    
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
    //Img review
    $('.reviews__content-right').slick({
        slideToShow: 1,
        slideToScroll: 1,
        dots: false,
        prevArrow: $('.reviews__leftArrow'),
        nextArrow: $('.reviews__rightArrow'),
        fade: true,
        asNavFor: $('.reviews__left-content')
    })
    //Mobile reviews
    $('.reviewsMobile__content-content').slick({
        slideToShow: 1,
        slideToScroll: 1,
        dots: false,
        prevArrow: $('.reviewsMobile__leftArrow'),
        nextArrow: $('.reviewsMobile__rightArrow'),
        fade: true
    })
    // auto select transform
    document.querySelectorAll('.articles__item-content').forEach(function(el){
        let height = el.children[1].offsetHeight;
        height += 10;
        el.style.transform = 'translateY('+height+'px)';
    })

    //Mobile menu
    $('.indexMobile__menuBtn').click(function (e) { 
        e.preventDefault();
        
        toggleMenu();
    });
    $('.indexMobile__link').click(function (e) { 
        toggleMenu();
    });
});

//Что происходил при скролле
$(window).scroll(() => {
    sticky();
    allFunctions();
});

function sticky(){
    let bool = $(window).scrollLeft() >= $(window).width();
    $('.nav').css({
        'position': bool ? 'fixed' : 'absolute'
    });

    if(bool){
        $('.whatsapp__inner').addClass('active');
    } else {
        $('.whatsapp__inner').removeClass('active');
    }
}

function visible (target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left &&// Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            $('a.nav__item.select').removeClass('select');

            $('a.nav__item').each(function(){
                $(this).addClass('#' + target.id === $(this).attr('href') ? 'select' : '');
            })
    }

};

function changeColor(target){
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left &&// Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            $('.nav__item').addClass('black');
    } else {
        $('.nav__item').removeClass('black');
    }
}

function allFunctions(){
    visible(document.querySelector('.gallery'));
    visible(document.querySelector('.reviews'));
    visible(document.querySelector('.articles'));
    visible(document.querySelector('.partners'));

    changeColor(document.querySelector('.lastTwo'));
}

function toggleMenu(){
    $('section:not(.menuNotOff)').toggle();
    $('.indexMobile__bottom').toggle();
    $('.index').hide();
    
    $('.indexMobile__menuBtn').toggleClass('active');

    $('.indexMobile__top-bottom').fadeToggle();
    $('.indexMobile__top-menu').fadeToggle();

}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiJdfQ==
