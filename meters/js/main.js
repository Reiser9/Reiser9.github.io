$(document).ready(function () {
    $(".header__menu").on("click", function () {
        $(this).toggleClass("active");
        $("body").toggleClass("scroll");

        $(".mobile__menu").toggleClass("active");
        $(".header").toggleClass("fixed");
    });

    const switchHandler = (currentElement, activeElement, disabledElement) => {
        currentElement.toggleClass("active");

        if (currentElement.hasClass("active")) {
            disabledElement.removeClass("active");
            activeElement.addClass("active");
        } else {
            disabledElement.addClass("active");
            activeElement.removeClass("active");
        }
    }

    // Switches
    $(".footer__switch").on("click", function () {
        switchHandler($(this), $(".contact__piter"), $(".contact__moscow"));
    });

    $(".contact__switch--handler").on("click", function () {
        switchHandler($(this), $(".contacts__piter"), $(".contacts__moscow"));
    });

    $(".studios__switch").on("click", function () {
        switchHandler($(this), $(".studios__piter"), $(".studios__moscow"));
    });

    // How we work
    $(".howwork__item").on("click", function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".howwork__item").removeClass("active");
            $(this).toggleClass("active");
        }
    });

    // Faq
    $(".faq__item").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".faq__item").removeClass("active");
            $(this).toggleClass("active");
        }
    });

    $(window).scroll(function () {
        $(".placement").each(function () {
            var blockPosition = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height() / 5;

            if (scrollPosition >= blockPosition) {
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });

        $(".center").each(function () {
            var blockPosition = $(this).offset().top;
            var scrollPosition = $(window).scrollTop() + $(window).height() / 5;

            if (scrollPosition >= blockPosition) {
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });
    });

    // Product image view
    $(".product__slider--bottom--item").on("click", function(){
        if($(this).hasClass("active")){
            return;
        }

        $(".product__slider--bottom--item").removeClass("active");
        $(this).addClass("active");

        const image = $(this).children(".product__slider--bottom--item--img").children("img").attr("src");

        $(".product__slider--img").attr("src", image);

    });

    // Modal
    $(".modal__fade").on("click", function(){
        $("body").addClass("scroll2");
        const modal = $(this).attr("data-modal");

        $("#"+modal).addClass("active");
    });

    $(".modal__close").on("click", function(){
        $("body").removeClass("scroll2");
        
        $(".modal").removeClass("active");
    });

    $(".modal").on("click", function(){
        $("body").removeClass("scroll2");
        
        $(".modal").removeClass("active");
    });

    $(".modal__content").on("click", function(e){
        e.stopPropagation();
    });

    // Sliders
    const casesSlider = new Swiper(".cases__item--slider", {
        pagination: {
            el: ".cases__slider--pagination",
            clickable: true,
        },
    });

    const reviewsSlider = new Swiper(".reviews__slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev",
        },
        pagination: {
            el: ".reviews__slider--frac",
            type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.15,
                spaceBetween: 8
            },
            768: {
                slidesPerView: 1.5,
            },
            998: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    const gallerySlider = new Swiper(".gallery__slider", {
        pagination: {
            el: ".gallery__slide--pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span>'+ (index + 1 >= 10 ? index + 1 : `0${index + 1}`) +'</span></span>';
            }
        },
        navigation: {
            nextEl: ".gallery__arrow--next",
            prevEl: ".gallery__arrow--prev",
        }
    });
});
