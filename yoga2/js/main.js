$(document).ready(function(){

	$(".program__item").on('click', function(){
		$(this).children(".program__item--answer").slideToggle(200);
	});

});