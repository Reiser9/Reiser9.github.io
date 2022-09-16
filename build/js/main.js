$(document).ready(function(){

    const close = () => {
        $(".body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

	$(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

});