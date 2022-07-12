$(document).ready(function(){

    $(".main__item--phone").on("click", function(){
        $(this).text($(this).attr("data-phone"));
    });

    $(".location").on("click", function(e){
        e.preventDefault();
        $(".modal[data-modal="+$(this).attr('data-modal')+"]").addClass("active");
    });

    $(".modal__location--close").on("click", function(){
        $(".modal[data-modal="+$(this).attr('data-modal')+"]").removeClass("active");
    });

	$(".years__confirm").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal[data-modal='years']").removeClass("active");
    });

    $(".menu__cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".menu").removeClass("active");
    });

    $(".header__menu").on("click", function(e){
        e.preventDefault();
        $("body").addClass("scroll");
        $(".menu").addClass("active");
    });

    $(".card__tab").on("click", function(){
        $(".card__tab").removeClass("active");
        $(this).addClass("active");
        $(".card__content--box").removeClass("active");
        $(".card__content--box").eq($(this).index()).addClass("active");
    });

    $(".card__carousel--big").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.card__carousel--small'
    });

    $(".card__carousel--small").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card__carousel--big',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

});