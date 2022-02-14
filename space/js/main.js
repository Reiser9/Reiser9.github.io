$(document).ready(function(){

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal").removeClass("active");
	}

	$(".up__arrow").on('click', function(){
		$('body,html').animate({scrollTop: 0}, 300);
	});

	var austDay = new Date();
	austDay = new Date(austDay.getFullYear(), 10 - 1, 15);
	$('.main__timer').countdown({until: austDay});
	$(".ico__timer").countdown({until: austDay});

	$(".road__item--read").on("click", function(){
		$(this).siblings('.readmore__text').slideToggle(200);
	});

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal").addClass("active");
	});

	$(".cross").on("click", function(){
		close();
	});

	$(".go").on("click", function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	$(".popup__open").on("click", function(){
		$("body").addClass("scroll");
		$(".popup").addClass("active");
	});

	$(document).mouseup(function (e){
	    var container = $(".popup__inner");
	    if($(".popup").hasClass("active")){
	    	if(!container.is(e.target) && container.has(e.target).length === 0){
	    		$("body").removeClass("scroll");
	    	    $(".popup").removeClass("active");
	    	}
	    }
	});

	if($(window).scrollTop > 20){
		$(".header").addClass("top");
	}

	$(document).on("scroll", function(){
		if($(window).scrollTop() > 20){
			$(".header").addClass("top");
		}
		else{
			$(".header").removeClass("top");
		}
	});

});