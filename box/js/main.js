$(document).ready(function(){

	$(".goto").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

});