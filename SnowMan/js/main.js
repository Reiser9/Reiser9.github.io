$(document).ready(function(){
	const close = () => {
		$("body").removeClass('scroll');
		$(".modal__menu").removeClass('active');
	}

	setTimeout(() => {
		$(".main__title--top").addClass("active");
		$(".main__title--bottom").addClass("active");
	}, 200);

	let count = 1;
	const editImg = (count) => {
		$(".about__img").attr('src', `img/${count}.png`);
		if(count >= 9){
			count = 1;
		}
		else{
			count++;
		}
		setTimeout(() => editImg(count), 400);
	}
	setTimeout(() => editImg(count), 400);

	$(".goto").on('click', function(e){
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

	$(".menu").on('click', function(){
		$("body").addClass('scroll');
		$(".modal__menu").addClass('active');
	});

	$(".modal__menu--close").on('click', function(){
		close();
	});

	$(window).scroll(function(){
		let offsetPage = $(window).scrollTop() / 3;
		$(".main__img").css("top", offsetPage);

		if($(window).scrollTop() > 20){
			$(".header").addClass("active");
		}
		else{
			$(".header").removeClass("active");
		}
	});

	// Слайдеры
	$(".slider__carousel").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		responsive: [
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 3,
		        }
		    },
		    {
		        breakpoint: 500,
		        settings: {
			        slidesToShow: 2,
		        }
		    }
		]
	});

});