$(document).ready(function(){

	$(".schedule__tab").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".schedule__tab").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Мобильное меню
    $(".menu__mobile").on("click", function(){
        $(".mobile__menu").addClass("active");
        $("body").addClass("scroll");
    });

    const closeMobileMenu = () => {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    }

    $(".mobile__menu--close").on("click", function(){
        closeMobileMenu();
    });

    // Скролл до якоря
    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        closeMobileMenu();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    // Слайдеры
    const mentors = new Swiper(".mentors__slider", {
        slidesPerView: 6,
        spaceBetween: 16,
        navigation: {
            nextEl: '.mentors__slider--next',
            prevEl: '.mentors__slider--prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.8,
                spaceBetween: 10,
            },
            440: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            998: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 16,
            },
        },
    });

    const judges = new Swiper(".judges__slider", {
        slidesPerView: 5,
        spaceBetween: 18,
        breakpoints: {
            0: {
                slidesPerView: 1.8,
                spaceBetween: 10,
            },
            440: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            998: {
                slidesPerView: 5,
                spaceBetween: 18,
            },
        },
    });

});