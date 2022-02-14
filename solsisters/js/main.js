$(document).ready(function(){

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	let path = $(location).attr('href');
	path = path.split("#")[1];
	if(path != undefined){
		close();
		let pointTop2 = $("#"+path+"Scroll").offset().top;
		$('body,html').animate({scrollTop: pointTop2}, 500);
	}

	let count = 1;
	const editImg = (count) => {
		$(".attr__img").attr('src', `img/${count}.png`);
		$(".who__img").attr('src', `img/${count}.png`);
		if(count >= 4){
			count = 1;
		}
		else{
			count++;
		}
		setTimeout(() => editImg(count), 400);
	}
	setTimeout(() => editImg(count), 400);

	$(window).scroll(function(){
		if($(window).scrollTop() > 20){
			$(".header").removeClass("border");
		}
		else{
			$(".header").addClass("border");
		}
	});

	$(".menu").on('click', function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on('click', function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	$(".faq__item").on('click', function(){
		let p = $(this).children('.faq__item--title--inner').children('.faq__item--icon');
		$(this).children('.faq__item--text').slideToggle(100);
		if(p.text() == "-"){
			p.text("+");
		}
		else{
			p.text("-");
		}
	});

	$(".attr__button").on('click', function(){
		$(".attr__button").removeClass("active");
		$(".attr__content").removeClass("active");
		$(this).addClass("active");
		let tab = $(this).attr("data-tab");
		$(".attr__content[data-tab="+tab+"]").addClass("active");
	});

	$(".goto").on('click', function(){
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point+"Scroll").offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});
});