$(document).ready(function(){

	$(".menu__link").on("click", function(e){
        e.preventDefault();
        const menu = $(this).attr("data-menu");
        const targetPoint = $(".mobile__menu[data-menu="+menu+"]");

        if(targetPoint.hasClass("active")){
            $(".mobile__menu").removeClass("active");
            $(this).removeClass("active");
        }
        else{
            $(".mobile__menu").removeClass("active");
            $(".menu__link").removeClass("active");
            targetPoint.addClass("active");
            $(this).addClass("active");
        }
    });

    $(".menu__button").on("click", function(){
        $(this).toggleClass("active");

        $(".header__menu").toggleClass("active");
    });

    $(".up").on("click", function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Show password
    $(".show__pasword").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".auth__password").attr("type", "text");
        }
        else{
            $(".auth__password").attr("type", "password");
        }
    });

});