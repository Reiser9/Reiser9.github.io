$(document).ready(function(){

	$(".header__menu").on("click", function(){
        $(this).toggleClass("active");
        $("body").toggleClass("scroll");

        $(".mobile__menu").toggleClass("active");
        $(".header").toggleClass("fixed");
    });

    $(".footer__switch").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".contact__moscow").removeClass("active");
            $(".contact__piter").addClass("active");
        }
        else{
            $(".contact__moscow").addClass("active");
            $(".contact__piter").removeClass("active");
        }
    });

    $(".contact__switch--handler").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".contacts__moscow").removeClass("active");
            $(".contacts__piter").addClass("active");
        }
        else{
            $(".contacts__moscow").addClass("active");
            $(".contacts__piter").removeClass("active");
        }
    });

    $(".studios__switch").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".studios__moscow").removeClass("active");
            $(".studios__piter").addClass("active");
        }
        else{
            $(".studios__moscow").addClass("active");
            $(".studios__piter").removeClass("active");
        }
    });

    // Faq
    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).toggleClass("active");
        }
    });

});