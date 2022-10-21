$(document).ready(function () {

    // Меню
    const close = () => {
        $("body").removeClass("scroll");
        $(".mobile__menu").removeClass("active");
    }

    $(".header__menu").on("click", function(){
        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu--cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
        if($(window).width() > 768){
            close();
		}
	});

    const mainSlider = new Swiper(".main", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    const sliderBlock = new Swiper(".slider__block--content", {
        loop: true,
        slidesPerView: 7,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 7
            },
            0: {
                slidesPerView: 4
            }
        }
    });

    const categoryBlock = new Swiper(".slider__category--content", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 4
            },
            0: {
                slidesPerView: 2
            }
        }
    });

    const tovarSlider = new Swiper(".tovar__content--slider", {
        loop: true,
        slidesPerView: 5,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".tovar__next",
            prevEl: ".tovar__prev",
        },
        breakpoints: {  
            998: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 4
            },
            390: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    });

});
