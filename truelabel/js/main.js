$(document).ready(function(){

	$(".modal__close").on("click", function(e){
        e.preventDefault();

        $(".modal__menu").removeClass("active");
    });

    $(".menu").on("click", function(e){
        e.preventDefault();

        $(".modal__menu").addClass("active");
    });

});