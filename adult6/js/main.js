$(document).ready(function(){

    // Кнопка наверх
    $(".up").on("click", function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop: 0}, 400);
    });

    // Поиск на мобиле
    $(".search__button").on("click", function(){
        $(".search__mob").toggleClass("active");
    });

    // Меню
    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    const open = () => {
        $("body").addClass("scroll2");
        $(".modal__city").addClass("active");
    }

    $(".menu__button").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
        if($(window).width() > 998){
            close();
            menuHov();
		}
	});

    const menuHov = () => {
        $(".header .header__nav--link--inner").on("mouseenter", function(){
            $(this).addClass("active");
            $(this).children(".header__nav--link").addClass("active");
        });
    
        $(".header .header__nav--link--inner").on("mouseleave", function(){
            $(this).removeClass("active");
            $(this).children(".header__nav--link").removeClass("active");
        });
    }

    if($(window).width() > 998){
        menuHov();
    }

    $(".modal .header__nav--link--inner .header__nav--link").on("click", function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $(".modal .header__nav--link--inner .header__nav--drop").removeClass("active");
            $(".modal .header__nav--link--inner .header__nav--link").removeClass("active");
        }
        
        $(this).siblings(".header__nav--drop").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".header .header__nav--link--inner").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".header__nav--link").removeClass("active");
        }
        else{
            $(this).addClass("active");
            $(this).children(".header__nav--link").addClass("active");
        }
    });

    $(".header__city").on("mouseenter", function(){
        $(this).addClass("active");
    });

    $(".header__city").on("mouseleave", function(){
        $(this).removeClass("active");
    });

    // Кнопка наверх
    const ofset = () => {
        if($(window).scrollTop() > 100){
            $(".up__button").addClass("active");
        }
        else{
            $(".up__button").removeClass("active");
        }
    }

    $(window).scroll(function(){
        ofset();
    });

    ofset();

    // Показать форму отзыва
    $(".review__leave").on("click", function(){
        $(".card__reviews--show").removeClass("active");
        $(".card__reviews--leave").addClass("active");
    });

    $(".review__send").on("click", function(){
        $(".card__reviews--show").addClass("active");
        $(".card__reviews--leave").removeClass("active");
    });

    // Слайдеры
	$(".salon__item--img--slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $(".salon__slider--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.salon__slider--small'
    });

    $(".salon__slider--small").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.salon__slider--big',
        focusOnSelect: true
    });

});