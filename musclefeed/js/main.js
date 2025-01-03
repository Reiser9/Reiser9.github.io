$(document).ready(function(){

	$(".reviews__item--text--full").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(this).siblings(".reviews__item--text").addClass("active");
            $(this).text("Свернуть");
        }
        else{
            $(this).siblings(".reviews__item--text").removeClass("active");
            $(this).text("Смотреть весь отзыв");
        }
    });

    // Слайдеры
    const team = new Swiper(".team__content", {
        slidesPerView: 5,
        spaceBetween: 24,
        navigation: {
            prevEl: ".team__prev",
            nextEl: ".team__next"
        }
    });

    const food = new Swiper(".food__content", {
        slidesPerView: 5,
        navigation: {
            prevEl: ".food__prev",
            nextEl: ".food__next"
        }
    });

    const complex = new Swiper(".complex__slider", {
        slidesPerView: 3,
        spaceBetween: 24,
    });

});