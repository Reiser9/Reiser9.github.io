$(document).ready(function(){

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        $(".mobile__menu").removeClass("active");

		$('body,html').animate({scrollTop: $("#"+point).offset().top + 10}, 500);
	});

    // Mobile menu
    $(".header__menu").on("click", function(){
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu").on("click", function(){
        $(".mobile__menu").removeClass("active");
    });

    $(".mobile__menu--content").on("click", function(e){
        e.stopPropagation();
    });

    // Faq
    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Slider
	$(".what__carousel").slick({
		infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10vw',
        appendArrows: '.what__dots',
        prevArrow: '<img src="img/prev.svg" alt="prev" class="what__arrow">',
        nextArrow: '<img src="img/next.svg" alt="next" class="what__arrow">',
        responsive: [
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20vw',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10vw',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '5vw',
                }
            },
        ]
	});

});