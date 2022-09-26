$(document).ready(function(){

    $(".modal__fade").on("click", function(){
        $("body").addClass("scroll");
        $(".modal").addClass("active");
    });

	$(".modal__cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal").removeClass("active");
    });

    $(".question__item").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(this).children(".question__top").children(".question__open").text("-");
        }
        else{
            $(this).children(".question__top").children(".question__open").text("+");
        }
    });

    $(".face__carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
        centerPadding: '500px',
        arrows: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '400px',
                }
            },
            {
                breakpoint: 1340,
                settings: {
                    centerPadding: '300px',
                }
            },
            {
                breakpoint: 998,
                settings: {
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '70px',
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

});