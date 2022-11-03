$(document).ready(function(){

    // Кнопка наверх
    $(".up").on("click", function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop: 0}, 400);
    });

    $(".main__sidebar--item--title--inner").on("click", function(){
        $(this).toggleClass("active");
        $(this).siblings(".main__sidebar--item--wrapper").toggleClass("active");

        if($(this).hasClass("active")){
            $(this).children(".main__sidebar--item--icon").attr("src", "img/minus.svg");
        }
        else{
            $(this).children(".main__sidebar--item--icon").attr("src", "img/plus.svg");
        }
    });

    // Поиск
    $(".search__mobile").on("click", function(e){
        e.preventDefault();
        $(".mobile__menu--search--inner").toggleClass("active");
    });

    // Меню
    const close = () => {
        $("body").removeClass("scroll");
        $(".mobile__menu").removeClass("active");
    }

    $(".menu__button").on("click", function(){
        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
        if($(window).width() > 998){
            close();
		}
	});

    // Кнопка наверх
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

    // Слайдеры
	var modelSlider = new Swiper(".main__model--slider", {
        effect: "cards",
        grabCursor: true,
    });

    var salonSlider = new Swiper(".main__salon--item--slider", {
        effect: "cards",
        grabCursor: true,
    });

    var cardSlider = new Swiper(".card__block--slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
            el: ".card__block--pagin",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            998: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            0: {
                slidesPerView: 1
            },
        },
    });
});