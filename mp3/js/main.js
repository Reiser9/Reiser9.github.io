$(document).ready(function(){

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        closeMenu();
        
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    const closeMenu = () => {
        $(".menu__inner").removeClass("active");
    }

    $(".menu__inner").on("click", function(e){
        e.preventDefault();

        $(this).toggleClass("active");
    });

});