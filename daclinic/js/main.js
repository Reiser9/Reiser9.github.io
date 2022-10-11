$(document).ready(function(){

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