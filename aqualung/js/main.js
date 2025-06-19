$(document).ready(function(){

    const closeMenu = () => {
        $("body").removeClass("scroll");
        $(".mobile__menu").removeClass("active");
    }

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        closeMenu();
		$('body, html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    $(".modal__show").on("click", function(e){
        e.preventDefault();

        $("body").addClass("scroll2");
        const modal = $(this).attr("data-modal");

        $(".modal[data-modal="+modal+"]").addClass("active");
    });

    $(".modal").on("click", function(e){
        e.preventDefault();

        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    });

    $(".modal__content").on("click", function(e){
        e.stopPropagation();
    });

    $(".services__item--title--inner").on("click", function(){
        if($(window).width() >= 998) return;

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings(".services__item--text").removeClass("active");
        }
        else{
            $(this).addClass("active");
            $(this).siblings(".services__item--text").addClass("active");
        }
    });

    $(".mobile__menu--close").on("click", function(){
        closeMenu();
    });

    $(".mobile__menu--button").on("click", function(){
        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    const worksSlider = new Swiper(".works__slider", {
        slidesPerView: 3.2,
        spaceBetween: 15,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.1,
                spaceBetween: 15
            },
            998: {
                slidesPerView: 2.5,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 15
            }
        }
    });

});