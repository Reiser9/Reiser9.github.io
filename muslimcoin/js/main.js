$(document).ready(function(){

	$(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });

});