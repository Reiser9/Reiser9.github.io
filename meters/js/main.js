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

    $(".chart__switch").on("click", function(){
        switchHandler($(this), $(".chart__piter"), $(".chart__moscow"));
    });

    $(".program__switch").on("click", function(){
        switchHandler($(this), $(".program__piter"), $(".program__moscow"));
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

    // Program slide effect
    const program = document.querySelector(".program");
    const programWrap = document.querySelector(".program__wrap");
    const programContent = document.querySelector(".program__inner");

    const roadRotate = () => {
        const roadWidth = programContent.clientWidth;
        
        const roadScrollTop = program.offsetTop;
        const windowScroll = window.scrollY;
        const windowWidth = window.outerWidth;

        program.setAttribute("style", `min-height: ${(roadWidth - windowWidth / 2) + programWrap.clientHeight}px`);

        if(roadScrollTop - windowScroll <= -150){
            if((roadWidth - windowWidth / 2) > Math.abs(roadScrollTop - windowScroll)){
                
                let turn = Math.abs(roadScrollTop - windowScroll);

                programWrap.scrollLeft = turn + -150;
            }
            else{
                programWrap.scrollLeft = roadWidth;
            }
        }
        else{
            programWrap.scrollLeft = 0;
        }
    }

    if(program){
        roadRotate();

        document.addEventListener("scroll", roadRotate);
    }

    // Why slide
    const why = document.querySelector(".why");
    const whyWrap = document.querySelector(".why__wrap");
    const whyContent = document.querySelector(".why__block--content");
    const whyScroll = document.querySelector(".why__content");

    const whyRotate = () => {
        const whyWidth = whyContent.clientWidth;
        
        const whyScrollTop = why.offsetTop;
        const windowScroll = window.scrollY;
        const windowWidth = window.outerWidth;
        const whyBannerHeight = document.querySelector(".why__banner").clientHeight;

        why.setAttribute("style", `min-height: ${whyWidth - (windowWidth / 2) + 250}px`);

        if(whyScrollTop - windowScroll <= 0){
            if(whyWidth - (windowWidth / 2) > Math.abs(whyScrollTop - windowScroll)){
                let turn = Math.abs(whyScrollTop - windowScroll);

                whyScroll.scrollLeft = turn;
            }
            else{
                whyScroll.scrollLeft = whyWidth;
            }
        }
        else{
            whyScroll.scrollLeft = 0;
        }
    }

    if(why){
        whyRotate();

        document.addEventListener("scroll", whyRotate);
    }

    $(".open__filter").on("click", function(){
        $("body").addClass("scroll2");
        $(".filters__wrap").addClass("active");
    });

    $(".filters__topbar--inner").on("click", function(){
        $("body").removeClass("scroll2");
        $(".filters__wrap").removeClass("active");
    });

    $(".filters__wrap").on("click", function(){
        $("body").removeClass("scroll2");
        $(".filters__wrap").removeClass("active");
    });

    $(".studios__filters--content").on("click", function(e){
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
        speed: 1000,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
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
        },
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });
        
                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
    });

    const gallerySlider = new Swiper(".gallery__slider", {
        autoplay: {
            delay: 5000
        },
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

    const locationSlider = new Swiper(".location__slider", {
        autoHeight: true,
        slidesPerView: 1.1,
        spaceBetween: 24,
        pagination: {
            el: ".location__paggination",
            type: "fraction",
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span>'+ (index + 1 >= 10 ? index + 1 : `0${index + 1}`) +'</span></span>';
            }
        },
        navigation: {
            nextEl: ".location__next",
            prevEl: ".location__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8
            },
            998: {
                slidesPerView: 1.1,
            }
        }
    });

    const locationMiniSlider = new Swiper(".location__slide--slider", {
        allowTouchMove: false,
        pagination: {
            el: ".location__paggination--mini",
            type: "fraction",
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span>'+ (index + 1 >= 10 ? index + 1 : `0${index + 1}`) +'</span></span>';
            }
        },
        navigation: {
            nextEl: ".location__mini--next",
            prevEl: ".location__mini--prev",
        }
    });
});
