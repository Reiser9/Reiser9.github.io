$(document).ready(function(){

    $(".modal__fade").on("click", function(){
        let modal = $(this).attr("data-modal");
        $("body").addClass("scroll");
        $(".modal[data-modal="+modal+"]").addClass("active");
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
        prevArrow: '<img class="face__arrow prev" src="img/prev.svg" alt="Назад" />',
        nextArrow: '<img class="face__arrow next" src="img/next.svg" alt="Вперед" />',
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