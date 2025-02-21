$(document).ready(function(){

	$(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".faq__item--text").slideUp(200);
        }
        else{
            $(".faq__item").removeClass("active");
            $(".faq__item").children(".faq__item--text").slideUp(200);
            $(this).addClass("active");
            $(this).children(".faq__item--text").slideDown(200);
        }
    });

    $(".actual__tab").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".actual__tab").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Sliders
    const partners = new Swiper(".partner__slider", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            prevEl: ".partner__prev",
            nextEl: ".partner__next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        },
    });

    const reviews = new Swiper(".reviews__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: false,
        navigation: {
            prevEl: ".reviews__prev",
            nextEl: ".reviews__next"
        },
    });

    const reviewImg = new Swiper(".reviews__img--slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            prevEl: ".reviews__img--prev",
            nextEl: ".reviews__img--next",
        }
    });

});