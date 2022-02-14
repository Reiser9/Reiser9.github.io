$(document).ready(function(){

	var plusValueBags = $(".value__arrow--up");
	var minusValueBags = $(".value__arrow--down");

	plusValueBags.on("click", function(){
		var bag = $(this).siblings(".bags__value--inner")
		.children(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 50){
			return;
		}
		else{
			bagValue++;
			bag.text(bagValue);
		}
	});

	minusValueBags.on("click", function(){
		var bag = $(this).siblings(".bags__value--inner")
		.children(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 0){
			return;
		}
		else{
			bagValue--;
			bag.text(bagValue);
		}
	});


	$(".header__button").on("click", function(){
		$('html,body').stop().animate({ scrollTop: $('#point').offset().top }, 500);
	});



	var numberDelete = $(".cart__item--inner").children(".cart__item--del").length;

	/* Удаление элемента с корзины */

	$(".cart__item--delete").on("click", function(){
		$(this).parent(".cart__item--del").fadeOut(0);
		numberDelete--;
		if(numberDelete == 0){
			$(".cart__item--inner").append('<div class="cart__empty">Корзина пуста</div>');
		}
	});

	/* Отключение модалки "спасибо" по нажатию на крест */

	$(".thanks__cross").on("click", function(){
		$("body").removeClass("body");
		$(".thanks__modal").fadeOut(100);
	});

	// $("."+/* Свой класс */+"").on("click", function(){
	// 	$("body").addClass("body");
	// 	$(".thanks__modal").fadeIn(100);
	// });


	/* Модальное окно корзины */

	$(".header__inner--cart").on("click", function(){
		$("body").addClass("body");
		$(".cart__modal").fadeIn(100);
	});

	$(".cart__cross").on("click", function(){
		$("body").removeClass("body");
		$(".cart__modal").fadeOut(100);
	});


	/* Модальное окно транспортной компании */

	$(".delivery__value--edit").on("click", function(){
		$(".modal").fadeOut(100);

		$("body").addClass("body");
		$(".transport__modal").fadeIn(100);
	});

	$(".transport__cross").on("click", function(){
		$("body").removeClass("body");
		$(".transport__modal").fadeOut(100);
	});


	$(".transport__item--choose").on("click", function(){
		if($(this).hasClass("transport__active")){
			$(".transport__item--choose").removeClass("transport__active");
			$(".transport__item--choose").text("Выбрать");
			$(".oplata__inner").slideUp(100);
		}
		else{
			$(".transport__item--choose").removeClass("transport__active");
			$(".transport__item--choose").text("Выбрать");
			$(this).addClass("transport__active");
			$(this).text("Выбрано");
			$(".oplata__inner").slideDown(100).css("display", "flex");
		}
	});



	/* Механизм включения окна товара и появлении динамического
	контента */

	$(".card__open").on("click", function(){
		$(".modal").fadeOut(100);
		$("body").addClass("body");

		var temp = $(this).siblings(".tovar__bags--width").children(".tovar__bag--width");

		var wb = temp.children(".wb").text().trim();
		var wl = temp.children(".wl").text().trim();
		var wlb = temp.children(".wlb").text().trim();

		var imgCard = $(this).children(".tovar__bags--img--box")
		.children(".tovar__bags--img").attr("src");


		var temp2 = $(this).siblings(".tovar__bags--info")
		.children(".tovar__bags--info--text");

		var art = temp2.children(".art").text().trim();
		var nameBag = temp2.children(".name__bag").text().trim();

		var size = temp2.children(".size").text().trim();
		var price = temp2.children(".price").text().trim();
		var numberBag = temp2.children(".number__bag").text().trim();

		var titleBag = $(this).attr("data-title");

		$(".card__title").text(titleBag);
		$(".wbm").text(wb);
		$(".wlm").text(wl);
		$(".wlbm").text(wlb);
		$(".tovar__img--modal").attr("src", imgCard);
		$(".art__modal").text(art);
		$(".modal__namebag").text(nameBag);
		$(".size__modal").text(size);
		$(".price__modal").text(price);
		$(".numberbag__modal").text(numberBag);

		
		$(".cards__modal").fadeIn(100);
	});





	$(".cards__cross").on("click", function(){
		$("body").removeClass("body");
		$(".cards__modal").fadeOut(100);
	});

});