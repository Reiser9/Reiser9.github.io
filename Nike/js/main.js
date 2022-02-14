$(document).ready(function(){

	$(".header__menu-icon").on("click", function(){
		$(".modal__menu").slideDown(300);
	});

	$(".lines").on("click", function(){
		$(".modal__menu").slideUp(300);
	});

});