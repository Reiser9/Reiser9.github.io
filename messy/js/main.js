$(document).ready(function(){

	function close(){
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".menu").on('click', function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".cross").on('click', function(){
		close();
	});

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	if($(window).scrollTop > 20){
		$(".header").addClass("active");
	}

	$(document).on("scroll", function(){
		if($(window).scrollTop() > 20){
			$(".header").addClass("active");
		}
		else{
			$(".header").removeClass("active");
		}
	});

	$(".faq__item").on('click', function(){
		$(this).children('.faq__answer').slideToggle(200);
		$(this).children('.faq__question--inner').children('.faq__close').toggleClass('active');
	});

	$(".minus").on('click', function(){
		let value = parseInt($(".about__count--input").val());
		if(value >= 1){
			value -= 1;
		}
		$(".about__count--input").val(value);
	});

	$(".plus").on('click', function(){
		let value = parseInt($(".about__count--input").val());
		if(value <= 100){
			value += 1;
		}
		$(".about__count--input").val(value);
	});

	let count = 1;
	const editImg = (count) => {
		$(".about__question--img").attr('src', `img/${count}.png`);
		if(count >= 4){
			count = 1;
		}
		else{
			count++;
		}
		setTimeout(() => editImg(count), 400);
	}
	setTimeout(() => editImg(count), 400);

	const rotate = () => {
		let scroll = $(".about__img--inner").scrollTop();
		let winScroll = $(window).scrollTop();
		scroll = winScroll - (scroll + 1400);
		$(".about__img--wrapper").css("transform", "translateX("+scroll/10+"px)");

		let sc = $(window).scrollTop();
		if(sc >= 2400){
			$(".start").addClass("active");
		}
		else{
			$(".start").removeClass("active");
		}

		if(sc >= 2700){
			$(".25").addClass("active");
		}
		else{
			$(".25").removeClass("active");
		}

		if(sc >= 2900){
			$(".50").addClass("active");
		}
		else{
			$(".50").removeClass("active");
		}

		if(sc >= 3200){
			$(".75").addClass("active");
		}
		else{
			$(".75").removeClass("active");
		}

		if(sc >= 3700){
			$(".100").addClass("active");
		}
		else{
			$(".100").removeClass("active");
		}

		if(sc >= 4200){
			$(".finish").addClass("active");
		}
		else{
			$(".finish").removeClass("active");
		}

		let off = $(".road__content").offset().top;
		if(sc - off > -320 && sc - off <= 1500){
			if($(window).width() <= 768){
				$(".duo__lapa").css("transform", "translateX(-30%) translateY("+(sc - off + 300)+"px)");
			}
			else{
				$(".duo__lapa").css("transform", "translateX(-50%) translateY("+(sc - off + 300)+"px)");
			}
		}
		else{
			if($(window).width() <= 768){
				$(".duo__lapa").css("transform", "translateX(-30%) translateY("+(sc - off + 300)+"px)");
			}
		}
	}

	rotate();
	$(document).scroll(function(){
		rotate();
	});

});