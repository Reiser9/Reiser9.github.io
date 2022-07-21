$(document).ready(function(){

	$(".password__check").on("click", function(){
        if($(this).hasClass("active")){
            $(this).siblings("input").attr("type", "password");
            $(this).removeClass("active");
        }
        else{
            $(this).siblings("input").attr("type", "text");
            $(this).addClass("active");
        }
    });

    $(".tab").on("click", function(e){
        e.preventDefault();

        $(".tab").removeClass("active");
        $(".tab__content").removeClass("active");

        let tab = $(this).attr("data-tab");

        $(this).addClass("active");
        $(".tab__content[data-tab="+tab+"]").addClass("active");
    });

});