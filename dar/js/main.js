$(document).ready(function(){

	$(".header__menu--link").on("click", function(e){
        e.preventDefault();
        const menu = $(this).attr("data-menu");
        const targetPoint = $(".mobile__menu[data-menu="+menu+"]");

        if(targetPoint.hasClass("active")){
            $(".mobile__menu").removeClass("active");
        }
        else{
            $(".mobile__menu").removeClass("active");
            targetPoint.addClass("active");
        }
    });

});