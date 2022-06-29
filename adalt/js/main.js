$(document).ready(function(){

	$(".years__confirm").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal").removeClass("active");
    });

    $(".menu__cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".menu").removeClass("active");
    });

    $(".uslugi").on("click", function(e){
        e.preventDefault();
        $("body").addClass("scroll");
        $(".menu").addClass("active");
    });

    var flag = false;
    $(".comment__toggle").on("click", function(){
        $(".comment__inner").slideToggle(200);

        if(flag){
            $(".comment__toggle").text("Показать комментарии");
            flag = false;
        }
        else{
            $(".comment__toggle").text("Скрыть комментарии");
            flag = true;
        }
    });

    $(".card__carousel--big").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="carousel__arrow arrow__next"><img src="img/next.svg" alt="next" class="arrow"></div>',
        prevArrow: '<div class="carousel__arrow arrow__prev"><img src="img/prev.svg" alt="prev" class="arrow"></div>',
        asNavFor: '.card__carousel--small'
    });

    $(".card__carousel--small").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
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