$(document).ready(function(){

	// Faq item toggle
    $(".faq__item").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".faq__item").removeClass("active");
            $(".faq__item").children(".faq__item--text").slideUp(150);
        }

        $(this).toggleClass("active");
        $(this).children(".faq__item--text").slideToggle(150);
    });

    // Mobile menu
    const closeMenu = () => {
        $(".mobile__menu").removeClass("active");
    }

    $(".menu__icon").on("click", function(){
        $(".mobile__menu").addClass("active");
    });

    $(".menu__close").on("click", function(){
        closeMenu();
    });

    // Go to point
    $(".go").on("click", function(e){
		// e.preventDefault();
		// let point = $(this).attr("data-point");
		closeMenu();
		// $('body, html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    // Main screen slider
    const slidesCount = $(".main__dot").length;
    let currentSlide = 1;

    const slide = () => {
        $(".main__dot").removeClass("active");
        $(".main__dot").eq(currentSlide - 1).addClass("active");
        $(".main__slide").removeClass("active");
        $(".main__slide").eq(currentSlide - 1).addClass("active");

        if(currentSlide == slidesCount){
            currentSlide = 1;
        }
        else{
            currentSlide++;
        }
    }

    slide();
    setInterval(slide, 2000);

});