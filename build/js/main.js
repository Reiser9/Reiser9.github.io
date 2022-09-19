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
		if($(window).width() > 998){
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

    $(".gallery__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '150px',
        prevArrow: '<img src="img/prev.png" class="gallery__arrow prev" />',
        nextArrow: '<img src="img/next.png" class="gallery__arrow next" />',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '70px',
                }
            },
            {
                breakpoint: 998,
                settings: {
                    centerPadding: '0px',
                }
            },
        ]
    });

    $(".main__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(".news__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        centerPadding: '180px',
        dots: true,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0px',
                }
            }
        ]
    });

    $(".team__content").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

});