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
    $(".menu__button--inner").on("click", function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".header__menu--icon").addClass("active");
            $(".header__cross--icon").removeClass("active");
            $(".header__drop").removeClass("active");
        }
        else{
            $(this).addClass("active");
            $(".header__menu--icon").removeClass("active");
            $(".header__cross--icon").addClass("active");
            $(".header__drop").addClass("active");
        }
    });

    $(document).click(function(){
        if($(".menu__button--inner").hasClass("active")){
            $(".menu__button--inner").removeClass("active");
            $(".header__menu--icon").addClass("active");
            $(".header__cross--icon").removeClass("active");
            $(".header__drop").removeClass("active");
        }
    });

    $(".header__drop").on("click", function(e){
        e.stopPropagation();
    });

    $(".header__drop--nav--link").on("click", function(e){
        e.preventDefault();

        if(!$(this).hasClass("active")){
            $(".header__drop--nav--link").removeClass("active");
            $(this).addClass("active");

            let index = $(this).index();

            $(".header__drop--content--item").removeClass("active");
            $(".header__drop--content--item").eq(index).addClass("active");
        }
        else{
            $(this).removeClass("active");
            let index = $(this).index();
            $(".header__drop--content--item").eq(index).removeClass("active");
        }
    });

    $(".header__drop--nav--link--mobile").on("click", function(e){
        e.preventDefault();
        
        if(!$(this).hasClass("active")){
            $(".header__drop--nav--link--mobile").removeClass("active");
            $(this).addClass("active");

            $(".header__drop--content--item--mobile").removeClass("active");
            $(this).next(".header__drop--content--item--mobile").addClass("active");
        }
        else{
            $(this).removeClass("active");
            $(this).next(".header__drop--content--item--mobile").removeClass("active");
        }
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

    $(".header__city").on("click", function(){
        $(this).toggleClass("active");
    });

    // Слайдеры
	$(".salon__item--img--slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $(".salon__item--carousel").slick({
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
        slidesToShow: 3,
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