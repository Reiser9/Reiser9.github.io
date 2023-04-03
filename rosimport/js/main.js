$(document).ready(function(){

	// Кнопка наверх
    $(".up").on("click", function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop: 0}, 400);
    });

    const ofset = () => {
        if($(window).scrollTop() > 100){
            $(".up__button").addClass("active");
        }
        else{
            $(".up__button").removeClass("active");
        }
    }

    $(window).scroll(function(){
        ofset();
    });

    ofset();

    // Этапы доставки
    $(".steps__item").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".steps__drop").removeClass("active");
        }
        else{
            $(".steps__item").removeClass("active");
            $(this).addClass("active");

            $(".steps__drop").removeClass("active");
            const index = $(this).index();
            $(".steps__drop").eq(index).addClass("active");
        }
    });

    // Слайдеры
    $(".mainblock__slider").slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.mainblock__bg--slider'
    });

    $(".mainblock__bg--slider").slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.mainblock__slider'
    });

});