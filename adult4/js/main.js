$(document).ready(function(){

	const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    const open = () => {
        $("body").addClass("scroll2");
        $(".modal__city").addClass("active");
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

    $(".salon__program--item--show").on("click", function(e){
        e.preventDefault();
        $(this).siblings(".salon__program--item--desc").addClass("active");
        $(this).remove();
    });

    $(".city__button").on("click", function(e){
        e.preventDefault();
        open();
    });

    $(".modal__city").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

    $(".modal__city--content").on("click", function(e){
        e.stopPropagation();
    });

    $(".modal__city--cross").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

    $(".reviews__fade").on("click", function(e){
        e.preventDefault();
        $(this).siblings(".reviews__item--content").toggleClass("active");
    });

    $(".link__go").on("click", function(e){
        e.preventDefault();
        let point = $(this).attr("data-point");
        let pointTop = $("#"+point).offset().top;
        $('body,html').animate({scrollTop: pointTop}, 500);
    });

    $(".header__nav--link--inner .header__nav--link").on("click", function(e){
        e.preventDefault();
        $(this).siblings(".header__nav--drop").toggleClass("active");
    });

    // Слайдеры
    $(".salon__carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: ".salon__img--smalls"
    });

    $(".salon__img--smalls").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".salon__carousel",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 3
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

    $(".card__img--inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".card__img--items"
    });

    $(".card__img--items").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".card__img--inner",
        focusOnSelect: true
    });

});