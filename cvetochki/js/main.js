$(document).ready(function(){

	// Функция блокировки кнопки
	function block(){
		$(".main__carousel--arrow").attr("disabled", false);
	}


	function findchildren(y=0){
		var child = 0;

		child = child + y;

		$(".modal__cart--item").each(function(){
			child += 1;
		});

		if(child <= 0){
			$(".empty__cart").fadeOut(0);
			$(".modal__cart--items--inner").append('<div class="empty__cart">Корзина пуста!</div>')
		}
		else{
			$(".empty__cart").fadeOut(0);
		}

		if(child <= 9){
			$(".cart__val").text(child);
		}
		else{
			$(".cart__val").text("9+");
		}
	}

	function findchildren2(x=0){
		var child2 = 0;

		child2 = child2 + x;

		$(".modal__fav--item").each(function(){
			child2 += 1;
		});

		if(child2 <= 0){
			$(".empty__fav").fadeOut(0);
			$(".modal__fav--inner").append('<div class="empty__fav">Избранных нет!</div>')
		}
		else{
			$(".empty__fav").fadeOut(0);
		}

		if(child2 <= 9){
			$(".favorite__val").text(child2);
		}
		else{
			$(".favorite__val").text("9+");
		}
	}

	findchildren();
	findchildren2();


	// Функция подсчета полной стоимости заказа
	function total(){
		var totalSum = 0;

		$(".modal__cart--item").each(function(){
			var a = $(this).children(".modal__cart--price--inner")
			.children(".modal__cart--price--text").text();
			var b = $(this).children(".modal__cart--price--inner")
			.children(".modal__cart--price--number--inner")
			.children(".modal__cart--price--number--text").text();

			a = parseInt(a) * parseInt(b);
			totalSum += a;
		});

		$(".modal__cart--total--value").text(totalSum + "Р");
	}


	$(document).on("click",".cart__clear", function(){
		$(".modal__cart--item").remove();
		findchildren();
		totla();
	});

	$(document).on("click", ".fav__clear", function(){
		$(".modal__fav--item").remove();
		findchildren2();
	});


	var number = $(".main__carousel--item").length;

	// Клик по левой кнопке карусели
	$(document).on("click", ".main__carousel--arrow--left", function(){
		function anim1(car, car2, car3, car4, car5, car6){
			car.removeClass(car2)
			.removeClass(car3).addClass(car4)
			.addClass(car5).removeClass(car6);
		}

		$(".main__carousel--arrow").attr("disabled", "disabled");

		var m = number;
		var n = 0;

		// Нулевое значение карусели переносим в конец

		var car0 = $(".carousel__0");
		car0.removeClass("main__carousel--item-0")
		.addClass("main__carousel--item--null").removeClass("carousel__0")
		.addClass("carousel__"+m);

		while (n < m){
			
			var car = $(".carousel__"+(n+1));
			var car2 = "main__carousel--item-"+(n+1);
			if(n >= 5){
				car2 = "main__carousel--item--null";
			}

			var car3 = "carousel__"+(n+1);
			var car4 = "main__carousel--item-"+n;
			if(n >= 6){
				car4 = "main__carousel--item--null";
			}

			var car5 = "carousel__"+n;
			var car6 = "animate__"+(n+1);
			if(n >= 5){
				car6 = "";
			}

			if(n < 5){
				car.addClass("animate__"+(n+1));
			}

			setTimeout(anim1, 500, car, car2, car3, car4, car5, car6);
			setTimeout(block, 600);

			n++;
		}

	});

	// Клик по правой кнопке карусели
	$(document).on("click",".main__carousel--arrow--right", function(){

		function animateret1(car1, car2, car3, car4, car5, car6){
			car1.removeClass(car2)
			.removeClass(car3).addClass(car4)
			.addClass(car5).removeClass(car6);
		}

		$(".main__carousel--arrow").attr("disabled", "disabled");

		var m = number;
		var n = 0;

		var carlast = $(".carousel__"+m);
		carlast.removeClass("main__carousel--item--null")
		.addClass("main__carousel--item-"+n).removeClass("carousel__"+m)
		.addClass("carousel__"+n);

		while(n < m){

			carret = $(".carousel__"+n);
			carret2 = "main__carousel--item-"+n;
			if(n >= 6){
				carret2 = "";
			}
			carret3 = "carousel__"+n;
			carret4 = "main__carousel--item-"+(n+1);
			if(n >= 5){
				carret4 = "main__carousel--item--null";
			}
			carret5 = "carousel__"+(n+1);
			carret6 = "animatereturn"+n;

			carret.addClass("animatereturn"+n);

			setTimeout(animateret1, 500, carret, carret2, carret3, carret4, carret5, carret6);
			setTimeout(block, 600);

			n++;
		}

	});


	//Клик по букету в карусели
	$(".main__carousel--item").on("click", function(){

		function fadeIn(){
			$(".main__carousel--item--text--inner")
			.removeClass("main__fade");
			$(".carousel__main").removeClass("main__fade");
		}

		function fadeOut(){
			$(".carousel__main").addClass("main__fade").children(".main__carousel--item--img")
			.attr("src", img);

			$(".main__carousel--text--view").text(view);
			$(".main__carousel--text--name").text(name);
			$(".main__carousel--text--price").text(price + "Р");
		}

		var temp = $(this).children(".main__carousel--item--img");

		var view = temp.attr("data-view");

		var img = temp.attr("src");

		var price = temp.attr("data-price");

		var name = temp.attr("data-name");

		$(".main__carousel--item--text--inner").addClass("main__fade");
		$(".carousel__main").addClass("main__fade");

		setTimeout(fadeOut, 200);

		setTimeout(fadeIn, 200);


	});

	$('.up__arrow').on("click", function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});


	$(".main__bar--progress").on("click", function(){
		$(this).next().toggleClass("active");
	});


	$(".main__content--mobile--menu--icon").on("click", function(){
		$(".mobile__menu").addClass("mobile__menu--active");
		$(".grey").addClass("grey__active");

		$(".mobile__menu--items").each(function(i){
			$(this).addClass("visited");
		});
	});

	$(".mobile__menu--cross").on("click", function(){
		$(".mobile__menu").removeClass("mobile__menu--active");
		$(".grey").removeClass("grey__active");

		$(".mobile__menu--items").each(function(i){
			$(this).removeClass("visited");
		});
	});

	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".mobile__menu").length === 0) {
	        $(".mobile__menu").removeClass("mobile__menu--active");
	        $(".grey").removeClass("grey__active");

	        $(".mobile__menu--items").each(function(i){
	        	$(this).removeClass("visited");
	        });
	    }
	});


	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".modal__cart").length === 0) {
	        $(".main__content--nav--cart--icon--inner").removeClass("active__cart");
	        $(".grey__cart").removeClass("grey__cart--active");
	        $(".modal__cart").removeClass("modal__cart--active");
	    }
	});

	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".modal__fav").length === 0) {
	        $(".main__content--nav--favorite--icon--inner").removeClass("active__cart");
	        $(".grey__fav").removeClass("grey__cart--active");
	        $(".modal__fav").removeClass("modal__cart--active");
	    }
	});


	$(".tovar__product--delivery--item").on("click", function(){
		$(".tovar__product--delivery--item").removeClass("product__delivery--active");
		$(this).addClass("product__delivery--active");

		var text = $(this).attr("data-text");

		$(".tovar__product--desc--text").fadeOut(0);
		$("."+text).fadeIn(0);
	});

	// Плюс
	$(document).on("click",".modal__cart--price--plus--inner", function(){
		var num = $(this).siblings(".modal__cart--price--number--text").text();
		if(parseInt(num) < 100){
			num = parseInt(num) + 1;
		}

		$(this).siblings(".modal__cart--price--number--text").text(num);
		total();
	});


	// Минус
	$(document).on("click",".modal__cart--price--minus--inner", function(){
		var num = $(this).siblings(".modal__cart--price--number--text").text();
		if(parseInt(num) > 1){
			num = parseInt(num) - 1;
		}

		$(this).siblings(".modal__cart--price--number--text").text(num);
		total();
	});

	// Включение корзины

	$(".main__content--nav--cart--icon--inner").on("click", function(){
		$(this).addClass("active__cart");
		$(".grey__cart").addClass("grey__cart--active");
		$(".modal__cart").addClass("modal__cart--active");
	});

	// Включение избранных товаров

	$(".main__content--nav--favorite--icon--inner").on("click", function(){
		$(this).addClass("active__cart");
		$(".grey__fav").addClass("grey__cart--active");
		$(".modal__fav").addClass("modal__cart--active");
	});

	imgF = [];
	nameF = [];
	priceF = [];

	imgC = [];
	nameC = [];
	priceC = [];


	// Добавление в корзину

	$(document).on("click",".popular__card--button--cart", function(){
		alert("Добавлено в корзину!");

		// Формирование товара для корзины

		var cartImg = $(this).parent(".categories__card--button--inner")
		.parent(".categories__card--name--inner").siblings(".categories__card--img--inner")
		.children(".categories__card--img").attr("src");
		var cartName = $(this).parent(".categories__card--button--inner")
		.siblings(".categories__card--name").text().trim();
		var cartPrice = $(this).parent(".categories__card--button--inner")
		.siblings(".categories__price--inner").children(".categories__price--text")
		.text().trim();

		imgC.push(cartImg);
		nameC.push(cartName);
		priceC.push(cartPrice);

		$(".modal__cart--items--inner").append('<div class="modal__cart--item"><div class="modal__cart--name--inner"><div class="modal__cart--name--img--inner"><img src="'+cartImg+'" alt="цветы" class="modal__cart--name--img"></div><div class="modal__cart--name--text">'+cartName+'<i class="fas fa-times modal__cart--delete--item"></i></div></div><div class="modal__cart--price--inner"><div class="modal__cart--price--number--inner"><div class="modal__cart--price--minus--inner modal__cart--price--val"><i class="fas fa-minus"></i></div><div class="modal__cart--price--number--text">1</div><div class="modal__cart--price--plus--inner modal__cart--price--val"><i class="fas fa-plus"></i></div></div><div class="modal__cart--price--text">'+cartPrice+'</div></div></div>')
		total();
		findchildren();
	});

	// Добавление в корзину х2

	$(document).on("click",".modal__fav--button--add", function(){
		alert("Добавлено в корзину!");

		// Формирование товара для корзины

		var cartImg = $(this).siblings(".modal__fav--item--box")
		.children(".modal__fav--item--img--inner").children(".modal__fav--item--img").attr("src");
		var cartName = $(this).siblings(".modal__fav--item--box")
		.children(".modal__fav--text--inner").children(".modal__fav--text").text().trim();
		var cartPrice = $(this).siblings(".modal__fav--item--box")
		.children(".modal__fav--text--inner").children(".modal__fav--price").text().trim();

		imgC.push(cartImg);
		nameC.push(cartName);
		priceC.push(cartPrice);

		$(".modal__cart--items--inner").append('<div class="modal__cart--item"><div class="modal__cart--name--inner"><div class="modal__cart--name--img--inner"><img src="'+cartImg+'" alt="цветы" class="modal__cart--name--img"></div><div class="modal__cart--name--text">'+cartName+'<i class="fas fa-times modal__cart--delete--item"></i></div></div><div class="modal__cart--price--inner"><div class="modal__cart--price--number--inner"><div class="modal__cart--price--minus--inner modal__cart--price--val"><i class="fas fa-minus"></i></div><div class="modal__cart--price--number--text">1</div><div class="modal__cart--price--plus--inner modal__cart--price--val"><i class="fas fa-plus"></i></div></div><div class="modal__cart--price--text">'+cartPrice+'</div></div></div>')
		total();
		findchildren();
	});

	// Удаление с корзины

	$(document).on("click",".modal__cart--delete--item", function(){
		// var delName = $(this).parent(".modal__cart--name--text").text().trim();
		// var delPrice = $(this).parent(".modal__cart--name--text").parent(".modal__cart--name--inner")
		// .siblings(".modal__cart--price--inner").children(".modal__cart--price--text").text().trim();
		// var delImg = $(this).parent(".modal__cart--name--text")
		// .siblings('.modal__cart--name--img--inner').children(".modal__cart--name--img").attr("src");

		// alert($.inArray(delImg,imgC));

		$(this).parent(".modal__cart--name--text").parent(".modal__cart--name--inner")
		.parent(".modal__cart--item").remove();
		total();
		findchildren();
	});

	// Добавление в избранное

	$(".popular__card--button--favorite").on("click", function(){
		alert("Добавлено в избранное!");

		// Формирование товара для корзины

		var favImg = $(this).parent(".categories__card--button--inner")
		.parent(".categories__card--name--inner").siblings(".categories__card--img--inner")
		.children(".categories__card--img").attr("src");
		var favName = $(this).parent(".categories__card--button--inner")
		.siblings(".categories__card--name").text().trim();
		var favPrice = $(this).parent(".categories__card--button--inner")
		.siblings(".categories__price--inner").children(".categories__price--text")
		.text().trim();

		imgF.push(favImg);
		nameF.push(favName);
		priceF.push(favPrice);

		$(".modal__fav--inner").append('<div class="modal__fav--item"><div class="modal__fav--item--box"><div class="modal__fav--item--img--inner"><img src="'+favImg+'" alt="цветы" class="modal__fav--item--img"></div><div class="modal__fav--text--inner"><div class="modal__fav--text">'+favName+'</div><div class="modal__fav--price">'+favPrice+'</div><i class="fas fa-times modal__fav--delete--item"></i></div></div><button class="button modal__fav--button--add"><img src="img/cart-white.png" alt="Корзина" class="modal__fav--cart--icon"></button></div>')
		findchildren2();
	});

	// Удаление из избранного

	$(document).on("click",".modal__fav--delete--item", function(){
		$(this).parent(".modal__fav--text--inner").parent(".modal__fav--item--box")
		.parent(".modal__fav--item").remove();

		findchildren2();
	});



	var rellax = new Rellax('.rellax');

	$(".carousel__inner").owlCarousel({
		items: 1,
    	loop: true,
    	center: true
	});


	$('.main__carousel--arrow--right').click(function () {
	    $(".carousel__inner").trigger('next.owl.carousel');
	});
	$('.main__carousel--arrow--left').click(function () {
	    $(".carousel__inner").trigger('prev.owl.carousel');
	});
});