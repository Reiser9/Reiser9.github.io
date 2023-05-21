$(document).ready(function(){

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

});