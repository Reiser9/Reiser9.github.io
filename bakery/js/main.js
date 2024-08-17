$(document).ready(function(){

    const close = () => {
        $(".modal__menu").removeClass("active");
    }

    $(".go").on("click", function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

    $(".header__menu").on("click", function(){
        $(".modal__menu").toggleClass("active");
    });

	$('.catalog__content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__arrow slider__arrow--prev"><img src="img/prev.svg" /></div>',
        nextArrow: '<div class="slider__arrow slider__arrow--next"><img src="img/next.svg" /></div>',
        appendArrows: $(".catalog__arrows"),
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});