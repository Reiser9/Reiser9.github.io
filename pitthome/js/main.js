$(document).ready(function(){

	const imageSlider = new Swiper(".main__item--img--slider", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".main__item--img--next",
            prevEl: ".main__item--img--prev",
        },
    });

    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    $(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
        if($(window).width() > 998){
            close();
		}
	});

});