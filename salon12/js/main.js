$(document).ready(function(){

    const open = () => {
        $("body").addClass("scroll2");
        $(".modal__city").addClass("active");
    }

	// Кнопка наверх
    $(".up").on("click", function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop: 0}, 400);
    });

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

    $(".mobile__menu--item").on("click", function(e){
        e.preventDefault();

        if(!$(this).hasClass("active")){
            $(".mobile__menu--item").removeClass("active");
            $(this).addClass("active");

            $(".mobile__menu--content").removeClass("active");
            $(this).next().addClass("active");
        }
        else{
            $(this).removeClass("active");
            $(this).next().removeClass("active");
        }
    });

    $(".menu").on("click", function(){
        $(".mobile__menu").addClass("active");
        $(this).removeClass("active");
        $(".cross").addClass("active");
    });

    $(".cross").on("click", function(){
        $(".mobile__menu").removeClass("active");
        $(this).removeClass("active");
        $(".menu").addClass("active");
    });

    // Меню
    $(".link__nav").on("click", function(e){
        e.preventDefault();

        let index = $(this).index();

        if($(this).hasClass("active")){
            $(this).removeClass("active");

            $(".header__bottom--content").eq(index).removeClass("active");
        }
        else{
            $(".link__nav").removeClass("active");
            $(this).addClass("active");

            $(".header__bottom--content").removeClass("active");
            $(".header__bottom--content").eq(index).addClass("active");
        }
    });

    $(".menu").on("click", function(e){
        e.preventDefault();

        $(".cross").addClass("active");
        $(this).removeClass("active");
        $(".header__bottom").addClass("active");
    });

    $(".cross").on("click", function(e){
        e.preventDefault();

        $(".menu").addClass("active");
        $(this).removeClass("active");
        $(".header__bottom").removeClass("active");
    });

    // Модалка городов
    $(".modal__city").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

    $(".modal__city--content").on("click", function(e){
        e.stopPropagation();
    });

    $(".modal__city--cross").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

    $(".city__button").on("click", function(e){
        e.preventDefault();
        open();
    });

});