$(document).ready(function(){

	$(".header__nav--link").on("click", function(e){
        if($(this).hasClass("parent")){
            e.preventDefault();

            $(this).toggleClass("active");
            $(this).siblings(".header__dropdown").toggleClass("active");
        }
    });

    $(".header__dropdown--link").on("click", function(e){
        if($(this).hasClass("parent")){
            e.preventDefault();

            $(this).toggleClass("active");
            $(this).siblings(".header__subdropdown").toggleClass("active");
        }
    });

    $(".menu__button").on("click", function(){
        $(".mobile__menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".mobile__menu--close").on("click", function(){
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".mobile__menu").on("click", function(){
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".mobile__menu--content").on("click", function(e){
        e.stopPropagation();
    });

});