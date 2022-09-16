$(document).ready(function(){

    const close = () => {
        $(".body").removeClass("scroll");
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
		if($(window).width() > 768){
			close();
		}
	});

    $(".techno__content").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".card__slider--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.card__slider--small'
    });

    $(".card__slider--small").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.card__slider--big',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

});