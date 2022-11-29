$(document).ready(function(){

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

    // Меню
    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    $(window).resize(function(){
        if($(window).width() > 998){
			$(".search__mob").removeClass("active");
            close();
		}
	});

    $(".menu__button").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(".header__nav--link--inner .header__nav--link").on("click", function(e){
        e.preventDefault();
        if(!$(this).hasClass("active")){
            $(".header__nav--drop").removeClass("active");
            $(".header__nav--link").removeClass("active");
        }
        
        $(this).siblings(".header__nav--drop").toggleClass("active");
        $(this).toggleClass("active");
    });

    // Поиск на мобиле
    $(".search__button").on("click", function(){
        $(".search__mob").toggleClass("active");
    });

    // Модалка городов
    const open = () => {
        $("body").addClass("scroll2");
        $(".modal__city").addClass("active");
    }

    $(".city__button").on("click", function(e){
        e.preventDefault();
        open();
    });

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

});