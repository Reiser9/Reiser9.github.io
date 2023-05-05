$(document).ready(function(){

    // Переход на следующий экран
	$(".main__next--block").on("click", function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop: $(".main").outerHeight()}, 500);
    });

    // Fixed header
    const checkHeaderFixed = () => {
        const scrollTop = $(window).scrollTop();
        const offsetTopHeader = $(".header__top--inner").outerHeight();

        if(scrollTop >= offsetTopHeader){
            $(".header__bottom").addClass("active");
        }
        else{
            $(".header__bottom").removeClass("active");
        }
    }

    // Мобильное меню фиксится
    const checkMobileFixed = () => {
        if($(window).scrollTop() > 10){
            $(".header__top").addClass("fixed");
        }
        else{
            $(".header__top").removeClass("fixed");
        }
    }
    
    checkMobileFixed();
    checkHeaderFixed();
    $(window).on("scroll", function(){
        checkMobileFixed();
        checkHeaderFixed();
    });

    // Меню
    $(".menu").on("click", function(){
        $(this).removeClass("active");
        $(".cross").addClass("active");

        $("body").addClass("scroll");

        $(".header__top").addClass("active");
        $(".modal__menu").addClass("active");
        $(".header__top").addClass("fixed");
    });

    $(".cross").on("click", function(){
        $(this).removeClass("active");
        $(".menu").addClass("active");

        $("body").removeClass("scroll");

        $(".header__top").removeClass("active");
        $(".modal__menu").removeClass("active");
        $(".header__top").removeClass("fixed");
    });

    // FAQ
    //let faqCount = 0;

    $(".faq__item--question").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            //faqCount = 0;

            //$(".faq__prev").removeClass("active");
            //$(".faq__next").addClass("active");
        }
        else{
            $(".faq__item--question").removeClass("active");
            $(this).addClass("active");
            //faqCount = $(this).parent(".faq__item").index() + 1;

            // if(faqCount === $(".faq__item").length){
            //     $(".faq__next").removeClass("active");
            // }
            // else{
            //     $(".faq__next").addClass("active");
            // }

            // if(faqCount > 1){
            //     $(".faq__prev").addClass("active");
            // }
            // else{
            //     $(".faq__prev").removeClass("active");
            // }
        }
    });

    // const getActiveByIndex = (index) => {
    //     $(".faq__item--question").removeClass("active");
    //     $(".faq__item--question").eq(index - 1).addClass("active");
    // }

    // $(".faq__prev").on("click", function(){
    //     faqCount -= 1;
        
    //     getActiveByIndex(faqCount);

    //     if(faqCount < $(".faq__item").length){
    //         $(".faq__next").addClass("active");
    //     }

    //     if(faqCount < 2){
    //         $(".faq__prev").removeClass("active");
    //     }
    // });

    // $(".faq__next").on("click", function(){
    //     faqCount += 1;

    //     getActiveByIndex(faqCount);

    //     if(faqCount === $(".faq__item").length){
    //         $(".faq__next").removeClass("active");
    //     }

    //     if(faqCount > 1){
    //         $(".faq__prev").addClass("active");
    //     }
    // });

    // Модалки
    $(".modal__button").on("click", function(e){
        e.preventDefault();

        $("body").addClass("scroll2");
        const modal = $(this).attr("data-modal");

        $(".modal[data-modal="+modal+"]").addClass("active");
    });

    $(".modal__cross").on("click", function(e){
        e.preventDefault();

        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    });

    // Слайдеры
    const reviews = new Swiper('.reviews__slider', {
        speed: 700,
        loop: true,
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        breakpoints: {
            "480": {
                slidesPerView: 1,
                spaceBetween: 30
            },
            "0": {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
        },
    });

    const arenaSlider = new Swiper('.arena__slider', {
        speed: 700,
        loop: true,
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: '.arena__next',
            prevEl: '.arena__prev',
        },
    });

    const partnersSlider = new Swiper('.partners__slider', {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev',
        },
        breakpoints: {
            "1200": {
                slidesPerView: 4,
            },
            "992": {
                slidesPerView: 3,
            },
            "0": {
                slidesPerView: 2,
            }
        },
    });

});