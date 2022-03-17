$(document).ready(function(){

	function close(){
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("active");
	}

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(".menu").on('click', function(){
		$("body").addClass("scroll");
		$(".mobile__menu").addClass("active");
	});

	$(".close").on('click', function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

});