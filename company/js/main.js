$(document).ready(function(){

	function copytext(el) {
	    var $tmp = $("<textarea>");
	    $("body").append($tmp);
	    $tmp.val($(el).text()).select();
	    document.execCommand("copy");
	    $tmp.remove();
	}

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	// Мобильное меню
	$(".burger").on('click', function(){
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

	const giveActiveClass = (thisElement, element) => {
		if(!thisElement.hasClass('active')){
			thisElement.siblings("."+element).removeClass('active');
			thisElement.addClass('active');
		}
	}

	$(".rec__circle").on('click', function(){
		$(this).siblings('.select__block').slideToggle(150);
	});

	$(".editview__button").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');
		let item = $(this).attr('data-item');

		let pattern = $(".citywith__item--inner[data-view='line'] .item__full[data-item="+item+"]");
		let pattern2 = $(this).parent(".rec__item--button--inner");

		pattern.children(".item__full--content").children(".rec__item--button--inner").children(".rec__item--button").removeClass("active");
		pattern.children(".item__full--content").children(".rec__item--button--inner").children(".rec__item--button[data-price="+price+"]").addClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".rec__item--weight--inner").removeClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".rec__item--weight--inner[data-price="+price+"]").addClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".item__wrapper").children(".rec__item--price--inner").removeClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".item__wrapper")
		.children(".rec__item--price--inner[data-price="+price+"]").addClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".item__wrapper").children(".rec__item--sale").removeClass("active");
		pattern.children(".item__full--content").children(".item__point").children(".item__wrapper")
		.children(".rec__item--sale[data-price="+price+"]").addClass("active");

		pattern2.siblings(".rec__wrapper").children(".rec__item--weight--inner").removeClass('active');
		pattern2.siblings(".rec__wrapper").children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');
		pattern2.parent(".book__wrapper").siblings(".rec__item--cart--inner").children(".rec__item--price--inner").removeClass('active');
		pattern2.parent(".book__wrapper").siblings(".rec__item--cart--inner").children(".rec__item--price--inner[data-price="+price+"]").addClass('active');
		pattern2.siblings(".rec__item--wrapper").children(".rec__item--content").children(".rec__item--sale").removeClass('active');
		pattern2.siblings(".rec__item--wrapper").children(".rec__item--content").children(".rec__item--sale[data-price="+price+"]").addClass('active');

		pattern2.siblings(".rec__item--wrapper").children(".rec__item--img--inner")
		.children(".rec__item--img").attr("src", "img/" + img);
		pattern.children(".item__full--img--inner").children(".item__full--img").attr("src", "img/" + img);

		$('.select__block').slideUp(150);
	});

	$(".editview__button--full").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');
		let item = $(this).attr('data-item');

		let pattern = $(".citywith__item--inner[data-view='square'] .itemfor3[data-item="+item+"]");
		let pattern2 = $(this).parent(".rec__item--button--inner").siblings(".item__point");

		pattern.children(".book__wrapper").children(".rec__item--button--inner").children(".rec__item--button").removeClass("active");
		pattern.children(".book__wrapper").children(".rec__item--button--inner").children(".rec__item--button[data-price="+price+"]").addClass("active");
		pattern.children(".book__wrapper").children(".rec__wrapper").children(".rec__item--weight--inner").removeClass('active');
		pattern.children(".book__wrapper").children(".rec__wrapper").children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');
		pattern.children(".rec__item--cart--inner").children(".rec__item--price--inner").removeClass('active');
		pattern.children(".rec__item--cart--inner").children(".rec__item--price--inner[data-price="+price+"]").addClass('active');
		pattern.children(".book__wrapper").children(".rec__item--wrapper").children(".rec__item--content")
		.children(".rec__item--sale").removeClass('active');
		pattern.children(".book__wrapper").children(".rec__item--wrapper").children(".rec__item--content")
		.children(".rec__item--sale[data-price="+price+"]").addClass('active');


		pattern2.children(".rec__item--weight--inner").removeClass('active');
		pattern2.children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--price--inner").removeClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--price--inner[data-price="+price+"]").addClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--sale").removeClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--sale[data-price="+price+"]").addClass('active');
		pattern.children(".book__wrapper").children(".rec__item--wrapper").children(".rec__item--img--inner")
		.children(".rec__item--img").attr("src", "img/" + img);
		$(this).parent(".rec__item--button--inner").parent(".item__full--content").siblings(".item__full--img--inner")
		.children(".item__full--img").attr("src", "img/" + img);

		$('.select__block').slideUp(150);
	});

	$(".select__block--item").on('click', function(){
		let data = $(this).attr("data-item");
		let img = $(this).children(".item__store--img").attr("src");
		let view = 1;
		let item = 1;
		let filter = $(this).attr("data-filter");
		let index = $(this).attr("data-index");
		$(".rec__item[data-item="+item+"]").addClass("disable");
		$(".rec__item[data-filter="+filter+"]").removeClass("disable");
		$(".item__full[data-item="+item+"]").addClass("disable");
		$(".item__full[data-filter="+filter+"]").removeClass("disable");
		$(".shop__block--item[data-item="+item+"]").addClass("disable");
		$(".shop__block--item[data-filter="+filter+"]").removeClass("disable");

		switch(data){
			case 'weight':
				// let weight = $(this).children(".rec__item--weight").text().trim();
				// let weightPrice = $(this).children(".rec__item--weight--price").text().trim();
				// $(this).parent(".select__block").siblings(".rec__item--weight").text(weight);
				// $(this).parent(".select__block").siblings(".rec__item--weight--price").text(weightPrice);
				break;
			case 'price':
				// let price = $(this).children(".rec__item--price").text().trim();
				// let pricePrev = $(this).children(".rec__item--price--prev").text().trim();
				// $(this).parent(".select__block").siblings(".rec__item--price").text(price);
				// $(this).parent(".select__block").siblings(".rec__item--price--prev").text(pricePrev);

				$(this).parent(".select__block").siblings(".item__store--img").attr("src", img);
				$(this).parent(".select__block").parent(".rec__item--price--inner").parent(".rec__item--cart--inner")
				.siblings(".book__wrapper").children(".rec__item--wrapper").children(".rec__item--img--inner")
				.children(".rec__item--logo").attr("src", img);

				$(this).parent(".select__block").parent(".rec__item--price--inner").parent(".item__wrapper")
				.parent(".item__point").parent(".item__full--content").siblings(".item__full--img--inner")
				.children(".rec__item--logo").attr("src", img);

				$(this).parent(".select__block").parent(".rec__item--price--inner").parent(".shop__block--inner")
				.siblings(".shop__block--wrapper").children(".shop__block--img--inner")
				.children(".shop__block--img--logo").attr("src", img);
				break;
			default:
				break;
		}
		$('.select__block').slideUp(150);
	});

	// Смена веса товара
	$(".for3__button").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');

		let pattern = $(this).parent(".rec__item--button--inner");

		pattern.siblings(".rec__wrapper")
		.children(".rec__item--weight--inner").removeClass('active');
		pattern.siblings(".rec__wrapper")
		.children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');

		pattern.parent(".book__wrapper").siblings(".rec__item--cart--inner")
		.children(".rec__item--price--inner").removeClass('active');
		pattern.parent(".book__wrapper").siblings(".rec__item--cart--inner")
		.children(".rec__item--price--inner[data-price="+price+"]").addClass('active');

		pattern.siblings(".rec__item--wrapper")
		.children(".rec__item--content").children(".rec__item--sale").removeClass('active');
		pattern.siblings(".rec__item--wrapper")
		.children(".rec__item--content").children(".rec__item--sale[data-price="+price+"]").addClass('active');

		pattern.siblings(".rec__item--wrapper").children(".rec__item--img--inner")
		.children(".rec__item--img").attr("src", "img/" + img);

		$('.select__block').slideUp(150);
	});

	$(".forlist__button").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');

		let pattern2 = $(this).parent(".rec__item--button--inner").parent(".shop__block--content");

		$(this).parent(".rec__item--button--inner").siblings(".rec__item--weight--inner").removeClass('active');
		$(this).parent(".rec__item--button--inner")
		.siblings(".rec__item--weight--inner[data-price="+price+"]").addClass('active');

		pattern2.parent(".shop__block--wrapper").siblings(".shop__block--inner").children(".rec__item--price--inner").removeClass('active');
		pattern2.parent(".shop__block--wrapper").siblings(".shop__block--inner")
		.children(".rec__item--price--inner[data-price="+price+"]").addClass('active');

		pattern2.parent(".shop__block--wrapper").siblings(".shop__block--inner").children(".shop__block--sales")
		.children(".rec__item--sale").removeClass('active');
		pattern2.parent(".shop__block--wrapper").siblings(".shop__block--inner").children(".shop__block--sales")
		.children(".rec__item--sale[data-price="+price+"]").addClass('active');

		$(this).parent(".rec__item--button--inner").parent(".shop__block--content").siblings(".shop__block--img--inner")
		.children(".shop__block--img").attr("src", "img/" + img);

		$('.select__block').slideUp(150);
	});

	$(".full__button").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');
		let item = $(this).attr('data-item');

		let pattern2 = $(this).parent(".rec__item--button--inner").siblings(".item__point");

		pattern2.children(".rec__item--weight--inner").removeClass('active');
		pattern2.children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--price--inner").removeClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--price--inner[data-price="+price+"]").addClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--sale").removeClass('active');
		pattern2.children(".item__wrapper").children(".rec__item--sale[data-price="+price+"]").addClass('active');

		$(this).parent(".rec__item--button--inner").parent(".item__full--content").siblings(".item__full--img--inner")
		.children(".item__full--img").attr("src", "img/" + img);

		$('.select__block').slideUp(150);
	});

	$(".city__wrapper--item").on('click', function(){
		giveActiveClass($(this), "city__wrapper--item");
	});

	$(".word__link").on('click', function(e){
		e.preventDefault();
		giveActiveClass($(this), "word__link");
		let word = $(this).attr("data-word");
		$(".word__item--word").removeClass("active");
		$(".word__item--word[data-word="+word+"]").addClass("active");
	});

	$(".contact__feedback--role").on('click', function(){
		giveActiveClass($(this), "contact__feedback--role");
		let role = $(this).text().trim();
		$(".feedback__role").text(role);
	});

	$(".city__wrapper--title").on('click', function(){
		$(this).fadeOut(0);
		$(".city__input").fadeIn(0).focus();
	});

	$(".city__wrapper--item").on('click', function(){
		let data = $(this).attr('data-letter');
		$(".city__item").removeClass("active");
		$(".city__item[data-letter="+data+"]").addClass("active");
	});

	// Складывание фильтров при мобилке
	$(".filter__item--title").on("click", function(){
		if($(window).width() < 768){
			$(this).siblings(".filter__item--content").slideToggle(150);
		}
	});

	$(".header__city--inner").on('click', function(){
		$(".header__citylist").addClass("active");
	});

	$(".headerlist__cross").on('click', function(){
		$(".header__citylist").removeClass("active");
	});

	// Копирование текста
	$(".copy__promo").on('click', function(){
		copytext($(".modal__promo--value"));
	});

	const check = () => {
		let s_top = $("html").scrollTop();
		let yes = $(".total__value").offset().top;

		if(s_top > yes - 500 && s_top < yes){
		    $(".total__value").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value2").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value3").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value4").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });
		}
	}

	if($(".total__value").length){
		$(document).scroll(function(){
		    check();
		});

		check();
	}

	$(".modal__promo--item--tab").on('click', function(){
		let tab = $(this).attr('data-tab');

		if($(".tab[data-tab="+tab+"]").hasClass("active")){
			$(this).removeClass("active");
			$(".tab[data-tab="+tab+"]").removeClass("active").slideUp(200);
		}
		else{
			$(".modal__promo--item--tab").removeClass("active");
			$(this).addClass("active");
			$(".tab").removeClass("active").slideUp(200);
			$(".tab[data-tab="+tab+"]").addClass("active").slideDown(200);
		}
	});

	$(".modal__close").on('click', function(){
		$("body").removeClass("scroll2");
		$(".modal__promo").removeClass("active");
		$(".modal__promo--item--tab").removeClass("active");
		$(".tab").removeClass("active").slideUp(200);
	});

	$(".modal__open").on('click', function(){
		$("body").addClass("scroll2");
		$(".modal__promo").addClass("active");
	});

	$(".sort__view--img").on('click', function(){
		let view = $(this).attr("data-view");
		if(!$(".citywith__item--inner[data-view="+view+"]").hasClass("active")){
			$(".citywith__item--inner").removeClass("active");
			$(".citywith__item--inner[data-view="+view+"]").addClass("active");
		}
	});

	$(".tovar__card--click").on('click', function(){
		let store = $(this).attr("data-store");
		$(".tovar__date--inner").removeClass("active");
		$(".tovar__weight").removeClass("active");
		$(".tovar__date--inner[data-store="+store+"]").addClass("active");
		$(".tovar__weight[data-store="+store+"]").addClass("active");
	});

	$(".promo__tab").on('click', function(e){
		e.preventDefault();
		let tab = $(this).attr('data-tab');

		if($(".promotab[data-tab="+tab+"]").hasClass("active")){
			$(this).removeClass("active");
			$(".promotab[data-tab="+tab+"]").removeClass("active").slideUp(200);
		}
		else{
			$(".modal__promo--item--tab").removeClass("active");
			$(this).addClass("active");
			$(".promotab").removeClass("active").slideUp(200);
			$(".promotab[data-tab="+tab+"]").addClass("active").slideDown(200);
		}
	});

	$(".open__list").on('click', function(e){
		e.preventDefault();
		$("body").addClass("scroll3");
		$(".modal__list").addClass("active");
		close();
	});

	$(".modal__list--cross").on('click', function(){
		$("body").removeClass("scroll3");
		$(".modal__list").removeClass("active");
	});

	var alph = ["A", "Б", "В", "Г", "Д", "Е", "Я"];
	let min = 0;
	let max = 6;
	$(".filter__slider--word").slider({
		range: true,
	    min,
	    max,
	    values: [min, max],
	    slide: function(event, ui){
	        $('.first__value').text(alph[ui.values[0]]);
	        $('.second__value').text(alph[ui.values[1]]);
	    }
	});

	$(".filter__slider--date").slider({
		range: true,
	    min: 2010,
	    max: 2021,
	    values: [2010, 2021],
	    slide: function(event, ui){
	        $('.first__value').text(ui.values[0]);
	        $('.second__value').text(ui.values[1]);
	    }
	});

	$(".review__quality--slider").slider({
	    min: 2,
	    max: 5
	});

	let min1 = 100;
	let max1 = 1500;
	$(".filter__slider--price").slider({
		range: true,
	    min: min1,
	    max: max1,
	    step: 10,
	    values: [min1, max1],
	    slide: function(event, ui){
	        $('.first__value').text(ui.values[0]);
	        $('.second__value').text(ui.values[1]);
	    }
	});

	// Карусели
	$(".store__content").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="store__arrow store__arrow--prev"><img src="img/prev.png" alt="Стрелка" class="store__arrow--icon"></div>',
		nextArrow: '<div class="store__arrow store__arrow--next"><img src="img/next.png" alt="Стрелка" class="store__arrow--icon"></div>',
		appendArrows: '.arrows__wrapper',
		responsive: [
		    {
		        breakpoint: 1870,
		        settings: {
			        slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 2
		        }
		    },
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1
		        }
		    }
		]
	});

	$(".main__inner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="main__arrow main__arrow--prev"><img src="img/prev.png" alt="Стрелка" class="main__arrow--icon"></div>',
		nextArrow: '<div class="main__arrow main__arrow--next"><img src="img/next.png" alt="Стрелка" class="main__arrow--icon"></div>'
	});

	$(".book__slider--main").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $(".all__slide").text(slick.slideCount);
	    $(".current__slide").text(i);
	});

	$(".book__slider--mini").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.book__slider--main',
		arrows: false,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		responsive: [
		    {
		        breakpoint: 1870,
		        settings: {
			        slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 2
		        }
		    }
		]
	});

	$(".book__slider--main").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.book__slider--mini',
		nextArrow: '<div class="book__slider--arrow"><img src="img/next.png" alt="Стрелка" class="book__slider--arrow--img"></div>',
		prevArrow: '<div class="book__slider--arrow"><img src="img/prev.png" alt="Стрелка" class="book__slider--arrow--img"></div>',
		appendArrows: '.book__slider--arrow--inner',
		responsive: [
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 1
		        }
		    }
		]
	});

	$(".shop__block--change--slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="book__slider--arrow"><img src="img/next.png" alt="Стрелка" class="book__slider--arrow--img"></div>',
		prevArrow: '<div class="book__slider--arrow"><img src="img/prev.png" alt="Стрелка" class="book__slider--arrow--img"></div>',
		appendArrows: '.shop__block--change--arrows',
		responsive: [
		    {
		        breakpoint: 1870,
		        settings: {
			        slidesToShow: 1
		        }
		    }
		]
	});

});