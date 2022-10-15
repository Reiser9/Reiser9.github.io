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
        if($(window).width() > 1200){
			$(".search__mob").removeClass("active");
            close();
		}
	});

    $(".header__nav--link--inner .header__nav--link").on("click", function(e){
        e.preventDefault();
        $(this).siblings(".header__nav--drop").toggleClass("active");
        $(this).toggleClass("active");
    });

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

    $(".card__slider--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.card__slider--small'
    });

    $(".card__slider--small").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.card__slider--big',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1470,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });

    $(".salon__slider--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.salon__slider--small'
    });

    $(".salon__slider--small").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.salon__slider--big',
        focusOnSelect: true
    });

});