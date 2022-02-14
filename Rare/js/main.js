$(document).ready(function(){

	$(".content__tab").on('click', function(){
		if(!$(this).hasClass("active")){
			$(".content__tab").removeClass("active");
			$(this).addClass("active");

			let wrapper = $(this).attr("data-wrapper");
			$(".content__wrapper").removeClass("active");
			$(".content__wrapper[data-wrapper="+wrapper+"]").addClass("active");
		}
	});

});