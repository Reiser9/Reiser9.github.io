$(document).ready(function(){

    const close = () => {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    }

    $(".menu__button").on("click", function(){
        $(".mobile__menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".mobile__menu--close").on("click", function(){
        close();
    });

	$(".go").on("click", function (e) {
        e.preventDefault();
        close();

        let point = $(this).attr("data-point");
        let pointTop = $("#" + point).offset().top;
        $("body,html").animate({ scrollTop: pointTop }, 500);
    });

    // Sliders
    const services = new Swiper(".service__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: ".service__prev",
            nextEl: ".service__next"
        }
    });

});