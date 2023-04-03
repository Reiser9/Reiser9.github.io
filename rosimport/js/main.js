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
        }
        else{
            $(".steps__item").removeClass("active");
            $(this).addClass("active");
        }
    });

});