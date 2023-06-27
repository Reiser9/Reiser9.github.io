$(document).ready(function(){

    const close = () => {
        $(".menu__inner").removeClass("active");
        $(".mobile__menu").removeClass("active");
    }

    $(".go").on("click", function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

	$(".faq__item").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
        }else{
            $(".faq__item").removeClass("active");
            $(".faq__item").children(".faq__item--wrapper").children(".faq__item--open").children("p").text("+");
            $(this).addClass("active");
            $(this).children(".faq__item--wrapper").children(".faq__item--open").children("p").text("-");
        }
    });

    $(".menu__inner").on("click", function(){
        $(this).toggleClass("active");
        $(".mobile__menu").toggleClass("active");
    });

    $(".unit").on("mouseenter", function(){
        const index = $(this).index();

        $(".token__point").eq(index).addClass("active");
    });

    $(".unit").on("mouseleave", function(){
        const index = $(this).index();

        $(".token__point").eq(index).removeClass("active");
    });

    $(".token__point").on("mouseenter", function(){
        const index = $(this).index();

        $(".unit").eq(index).addClass("active");
    });

    $(".token__point").on("mouseleave", function(){
        const index = $(this).index();

        $(".unit").eq(index).removeClass("active");
    });

    // Sliders
    const swiper = new Swiper('.roadmap__slider', {
        slidesPerView: 2.3,
        spaceBetween: 60,
        navigation: {
            nextEl: ".roadmap__next",
            prevEl: ".roadmap__prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            998: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 2.3,
                spaceBetween: 60,
            },
        }
    });

});