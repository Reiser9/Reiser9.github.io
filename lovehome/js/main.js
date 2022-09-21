$(document).ready(function(){

    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    $(".modal__menu--link").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).siblings(".modal__menu--drop").toggleClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

    $(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

	$(".card__content--carousel--small").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinity: true,
        arrows: false,
        asNavFor: ".card__content--carousel--big",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });

    $(".card__content--carousel--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
        arrows: false,
        asNavFor: ".card__content--carousel--small"
    });

    $(".card__salon--carousel--small").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity: true,
        arrows: false,
        asNavFor: ".card__salon--carousel--big",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $(".card__salon--carousel--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
        arrows: false,
        asNavFor: ".card__salon--carousel--small"
    });

});