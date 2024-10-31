$(document).ready(function () {
    $(".header__menu").on("click", function () {
        $(this).toggleClass("active");
        $(".header__menu--wrapper").toggleClass("active");
    });

    $(".main__down").on("click", function () {
        var target = $("#info");

        if (target && target.length) {
            $("html, body").animate({ scrollTop: target.offset().top }, 800);
        }
    });

    const reviewsSlider = new Swiper(".reviews__slider", {
        slidesPerView: 2,
        spaceBetween: 32,
        pagination: {
            el: ".reviews__slider--pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.15,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 24
            },
            998: {
                slidesPerView: 2,
                spaceBetween: 32
            }
        },
    });

    const partnerSlider = new Swiper(".partners__slider", {
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: ".partners__next",
            prevEl: ".partners__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50
            }
        },
    });
});
