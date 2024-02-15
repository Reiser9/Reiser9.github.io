$(document).ready(function(){

	const closeMenu = () => {
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("active");
	}

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		closeMenu();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".mobile__menu").addClass("active");
	});

	$(".cross").on("click", function(){
		closeMenu();
	});

});