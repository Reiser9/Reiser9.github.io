$(document).ready(function(){

    $(".exam__info--button").on("click", function(){
        $(".exam__info--button").removeClass("active");
        $(this).addClass("active");

        let num = $(this).attr("data-exam");
        $(".exam__info--bg").removeClass("active");
        $(".exam__info--bg[data-exam="+num+"]").addClass("active");
        $(".exam__info--text--inner").removeClass("active");
        $(".exam__info--text--inner[data-exam="+num+"]").addClass("active");
        $(".exam__item").removeClass("active");
        $(".exam__item[data-exam="+num+"]").addClass("active");
    });

    $(".exam__item--range").on("input", function(e){
        $(".cars__input").val(e.target.value);
    });

    $(".cars__input").on("input", function(e){
        if(e.target.value){
            $(".exam__item--range").val(e.target.value);
        }
    });

    $(".modal__menu--nav--item").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".modal__menu--nav--item").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".main__header--menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    });

    $(".modal__fade").on("click", function(e){
        e.preventDefault();
        $("body").addClass("scroll");

        let modal = $(this).attr("data-modal");

        $(".modal[data-modal="+modal+"]").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal").removeClass("active");
    });

    $(".modal__big--fade").on("click", function(e){
        e.preventDefault();

        $("body").addClass("scroll");
        $(".modal__big").addClass("active");
    });

    $(".modal__big--cross").on("click", function(){
        $("body").removeClass("scroll");
        $(".modal__big").removeClass("active");
    });

	const reviewSlider = new Swiper(".reviews__slider", {
        spaceBetween: 20,
        pagination: {
            el: ".reviews__slider--pagin--value",
            type: "fraction",
        },
        navigation: {
            nextEl: ".reviews__slider--next",
            prevEl: ".reviews__slider--prev",
        },
    });

    const aboutSlider = new Swiper(".about__slider", {
        spaceBetween: 20,
        pagination: {
            el: ".about__slider--pagin--value",
            type: "fraction",
        },
        navigation: {
            nextEl: ".about__slider--next",
            prevEl: ".about__slider--prev",
        },
    });

});