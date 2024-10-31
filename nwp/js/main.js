$(document).ready(function(){

    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".faq__item--wrap").children(".faq__item--open").text("+");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).toggleClass("active");
            $(this).children(".faq__item--wrap").children(".faq__item--open").text("-");
        }
    });

    $(".menu__button").on("click", function(){
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu--cross").on("click", function(){
        $(".mobile__menu").removeClass("active");
    });

    $(".mobile__menu").on("click", function(){
        $(".mobile__menu").removeClass("active");
    });

    $(".mobile__menu--content").on("click", function(e){
        e.stopPropagation();
    });

	// Sliders
    const partners = new Swiper(".partner__content", {
        slidesPerView: 4,
        spaceBetween: 38,
        loop: true,
        autoplay: {
            delay: 3000
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 22
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 22
            },
            998: {
                slidesPerView: 4,
                spaceBetween: 38
            }
        },
    });

    const functional = new Swiper(".functional__content", {
        slidesPerView: 3.7,
        spaceBetween: 18,
        navigation: {
            prevEl: ".functional__prev",
            nextEl: ".functional__next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            },
            420: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.7,
                spaceBetween: 18
            }
        },
    });

    const inject = new Swiper(".inject__slider", {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        navigation: {
            prevEl: ".inject__prev",
            nextEl: ".inject__next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1.75,
                spaceBetween: 15
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
    });

});