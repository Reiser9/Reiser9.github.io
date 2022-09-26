$(document).ready(function(){

	$('.phone').mask('+7 (000) 000 00-00');

    $(".popup__button").on("click", function(){
        $(".body").addClass("scroll");
        $(".modal").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        $(".body").removeClass("scroll");
        $(".modal").removeClass("active");
    });

});