$(document).ready(function(){

    // Галерея
    const scrollContent = $(".gallery__content");

    $(".gallery").on("mouseenter", function () {
        scrollContent.css("animation-play-state", "paused");
    });
    
    $(".gallery").on("mouseleave", function () {
        scrollContent.css("animation-play-state", "running");
    });

	// Слайдеры
    const autoplayDefault = {
        delay: 2000,
        disableOnInteraction: false,
    }

    const disableAutoplayOnHover = {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });
        
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    }

    const main = new Swiper(".main__slider", {
        slidesPerView: 1
    });

    $(".main__item").on("click", function(){
        $(".main__item").removeClass("active");
        $(this).addClass("active");
        const index = $(this).index();

        main.slideTo(index);
    });

    const experts = new Swiper(".experts__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: 4.5,
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".expert__prev",
            nextEl: ".expert__next"
        },
        on: disableAutoplayOnHover
    });

    const conf = new Swiper(".conf__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".conf__prev",
            nextEl: ".conf__next"
        },
        on: disableAutoplayOnHover
    });

    const news = new Swiper(".news__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: 4.5,
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".news__prev",
            nextEl: ".news__next"
        },
        on: disableAutoplayOnHover
    });

    const smi = new Swiper(".smi__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: 4.5,
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".smi__prev",
            nextEl: ".smi__next"
        },
        on: disableAutoplayOnHover
    });

    const prize = new Swiper(".prize__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".prize__prev",
            nextEl: ".prize__next"
        },
        on: disableAutoplayOnHover
    });

    const members = new Swiper(".members__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: autoplayDefault,
        spaceBetween: 100,
        navigation: {
            prevEl: ".members__prev",
            nextEl: ".members__next"
        },
        on: disableAutoplayOnHover
    });

    const partners = new Swiper(".partners__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 100,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".partners__prev",
            nextEl: ".partners__next"
        },
        on: disableAutoplayOnHover
    });

    const services = new Swiper(".services__slider", {
        speed: 600,
        slidesPerView: 2.3,
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".services__prev",
            nextEl: ".services__next"
        },
        on: disableAutoplayOnHover
    });

    const video = new Swiper(".video__slider", {
        speed: 600,
        centeredSlides: true,
        slidesPerView: 4,
        loop: true,
        spaceBetween: 24,
        autoplay: autoplayDefault,
        navigation: {
            prevEl: ".video__prev",
            nextEl: ".video__next"
        },
        on: disableAutoplayOnHover
    });

});