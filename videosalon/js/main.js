$(document).ready(function(){

	const closeModal = () => {
		$("body").removeClass("scroll");
		$(".modal").removeClass("active");
	}

	const closeModalMenu = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".view__work").on("click", function(e){
		e.preventDefault();
		$("body").addClass("scroll");
		$(".modal").addClass("active");
	});

	$(document).click(function (e) {
	    if ($(e.target).is('.modal')) {
	        closeModal();
	    }
	});

	$(".mobile__menu--icon").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on("click", function(){
		closeModalMenu();
	});

	$(window).resize(function(){
		if($(window).width() > 1200){
			closeModalMenu();
		}
	});

});