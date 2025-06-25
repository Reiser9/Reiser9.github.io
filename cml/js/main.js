$(document).ready(function () {
    const checkScroll = () => {
        if ($(this).scrollTop() > 50) {
            $(".fixed__buttons").addClass("active");
        } else {
            $(".fixed__buttons").removeClass("active");
        }
    };

    $(window).on("scroll", checkScroll);
    checkScroll();

    $('.up__button').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Светлая/Темная тема
    $(".header__theme--inner").on("click", function(){
        $(this).toggleClass("active");

        
    });

    // Шапка
    $(".header__form--switch").on("click", function(){
        $(this).toggleClass("active");
    });

    $(".open__dropdown").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(".header").removeClass("blur");
            $(this).removeClass("active");
            $(".content__dropdown").removeClass("active");
        }
        else{
            $(".content__dropdown").removeClass("active");
            $(".open__dropdown").removeClass("active");

            $(".header").addClass("blur");
            $(this).addClass("active");

            const dropdown = $(this).attr("data-dropdown");
            $(".content__dropdown[data-dropdown="+dropdown+"]").addClass("active");
        }
    });

    $(document).on('click', function () {
        $(".content__dropdown").removeClass("active");
        $(".open__dropdown").removeClass("active");
        $(".header").removeClass("blur");
    });

    $(".header__inner").on("click", function(e){
        e.stopPropagation();
    });

    // Услуги и цены
    $(".services__item").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".services__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Слайдеры
    const main = new Swiper(".main__slider", {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            prevEl: ".main__prev",
            nextEl: ".main__next"
        },
        pagination: {
            el: '.slider__nav--pagination',
            type: 'bullets',
            clickable: true
        }
    });

});
