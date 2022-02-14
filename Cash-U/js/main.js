$(document).ready(function(){

	var sumR = $(".main__money--sum--slideR").val();
	var monthR = $(".main__money--month--slideR").val();

	var sumD = $(".main__money--sum--slideD").val();;
	var monthD = $(".main__money--month--slideD").val();
	
	$(".money__sum--valR").text(sumR + " ₽");
	$(".money__month--valR").text(monthR + " месяцев");

	$(".money__sum--valD").text(sumD + " $");
	$(".money__month--valD").text(monthD + " месяцев");

	// Сумма инвестиций
	$(".main__money--slideR").on("input", function(){
		sumR = $(".main__money--sum--slideR").val();
		monthR = $(".main__money--month--slideR").val();

		$(".money__sum--valR").text(sumR + " ₽");
		$(".money__month--valR").text(monthR + " месяцев");
	});

	$(".main__money--slideD").on("input", function(){
		sumD = $(".main__money--sum--slideD").val();
		monthD = $(".main__money--month--slideD").val();

		$(".money__sum--valD").text(sumD + " $");
		$(".money__month--valD").text(monthD + " месяцев");
	});

	// Выбор валюты инвестиций
	$(".main__money--choose--item").on("click", function(){
		$(".main__money--choose--item").removeClass("active");
		$(this).addClass("active");

		let valute = $(this).attr("data-val");
		$(".main__money--valute").removeClass("active");
		$(".main__money--valute[data-val="+valute+"]").addClass("active");
	});

	// Отзывы
	$(".reviews__ava--item").on("click", function(){
		$(".reviews__ava--item").removeClass("active");
		$(this).addClass("active");
		var name = $(this).children("img").attr("data-name");
		var subname = $(this).children("img").attr("data-subtext");
		var text = $(this).children("img").attr("data-text");
		var cl = $(this).children("img").attr("data-class");
		$(".reviews__item").removeClass("one");
		$(".reviews__item").removeClass("two");
		$(".reviews__item").removeClass("three");
		$(".reviews__item").addClass(cl);

		$(".reviews__item--name").text(name);
		$(".reviews__item--subname").text(subname);
		$(".reviews__item--text").text(text);
	});

	// Скролл до якоря
	$(".header__nav li a").on("click", function(e){
		e.preventDefault();
		let data = $(this).attr("data-scroll");

		$('html,body').stop().animate({ scrollTop: $('#'+data+'').offset().top }, 1000);
	});

	// Мобильное меню
	$(".header__mobile--menu").on("click", function(){
		$("body").addClass("scroll");
		$(this).removeClass("active");
		$(".header__mobile--cross").addClass("active");
		$(".mobile__menu").addClass("active");
	});

	$(".header__mobile--cross").on("click", function(){
		$("body").removeClass("scroll");
		$(this).removeClass("active");
		$(".header__mobile--menu").addClass("active");
		$(".mobile__menu").removeClass("active");
	});

	$(window).resize(function(){
		if($(window).width() >= 998){
			$("body").removeClass("scroll");
			$(".mobile__menu").removeClass("active");
			$(".header__mobile--cross").removeClass("active");
			$(".header__mobile--menu").addClass("active");
		}
	});

	// Карусели

	$(".smi__carousel--inner").slick({
		slidesToShow: 3,
		prevArrow: '<svg class="smi__arrow smi__prev" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="24" width="8" height="8" transform="rotate(-180 8 24)" fill="#0F1418"/><rect x="16" y="32" width="8" height="8" transform="rotate(-180 16 32)" fill="#0F1418"/><rect x="16" y="16" width="8" height="8" transform="rotate(-180 16 16)" fill="#0F1418"/><rect x="24" y="8" width="8" height="8" transform="rotate(-180 24 8)" fill="#0F1418"/><rect x="24" y="40" width="8" height="8" transform="rotate(-180 24 40)" fill="#0F1418"/></svg>',
		nextArrow: '<svg class="smi__arrow smi__next" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="16" width="8" height="8" fill="#05C632"/><rect x="8" y="8" width="8" height="8" fill="#05C632"/><rect x="8" y="24" width="8" height="8" fill="#05C632"/><rect y="32" width="8" height="8" fill="#05C632"/><rect width="8" height="8" fill="#05C632"/></svg>',
		responsive: [
		    {
		      breakpoint: 998,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 998,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
	});

	$(".inw__carousel--bottom").slick({
		slidesToShow: 1,
		dots: true,
		infinite: false,
		swipe: false,
		prevArrow: '<svg class="inw__arrow inw__prev" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.65685 0.298304L0.292892 6.77983C-0.0976295 7.17757 -0.0976295 7.82243 0.292892 8.22017L6.65685 14.7017C7.04738 15.0994 7.68054 15.0994 8.07107 14.7017C8.46159 14.304 8.46159 13.6591 8.07107 13.2614L3.41422 8.51847H40V6.48153H3.41422L8.07107 1.73864C8.46159 1.3409 8.46159 0.696043 8.07107 0.298304C7.68054 -0.0994347 7.04738 -0.0994347 6.65685 0.298304Z" fill="black"/></svg>',
		nextArrow: '<svg class="inw__arrow inw__next" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.3431 0.298304L39.7071 6.77983C40.0976 7.17757 40.0976 7.82243 39.7071 8.22017L33.3431 14.7017C32.9526 15.0994 32.3195 15.0994 31.9289 14.7017C31.5384 14.304 31.5384 13.6591 31.9289 13.2614L36.5858 8.51847H0V6.48153H36.5858L31.9289 1.73864C31.5384 1.3409 31.5384 0.696043 31.9289 0.298304C32.3195 -0.0994347 32.9526 -0.0994347 33.3431 0.298304Z" fill="black"/></svg>',
	});

});