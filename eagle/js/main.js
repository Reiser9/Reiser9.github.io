$(document).ready(function(){

	$(".header__nav--link.parent").on("click", function(e){
        e.preventDefault();
        
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".header__nav--link.parent").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".menu__button").on("click", function(){
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu--close").on("click", function(){
        $(".mobile__menu").removeClass("active");
    });

    $(".header__profile--element").on("click", function(){
        $(this).toggleClass("active");
        $(".header__profile--dropdown").toggleClass("active");
    });

    $(".header__profile--dropdown--close").on("click", function(){
        $(".header__profile--element").removeClass("active");
        $(".header__profile--dropdown").removeClass("active");
    });

});