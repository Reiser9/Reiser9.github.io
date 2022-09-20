$(document).ready(function(){

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