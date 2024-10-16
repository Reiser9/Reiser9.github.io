$(document).ready(function(){

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
		if($(window).width() > 768){
			close();
		}
	});

	$(".about__slider--big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infiniet: true,
        arrows: false,
        asNavFor: '.about__slider--small'
    });

    $(".about__slider--small").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infiniet: true,
        arrows: false,
        dots: true,
        asNavFor: '.about__slider--big',
        focusOnSelect: true
    });

});