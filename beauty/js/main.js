$(document).ready(function(){

	$(".header__nav--link").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		let top = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

});