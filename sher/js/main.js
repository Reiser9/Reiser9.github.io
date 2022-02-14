$(document).ready(function(){


	$(document).on("click",".value__arrow--up",  function(){
		var bag = $(this).siblings(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 50){
			return;
		}
		else{
			bagValue++;
			bag.text(bagValue);
		}

		$(this).parent(".tovar__bags--buy--value--inner")
		.siblings(".cart__item--box").children(".box").text(bagValue);

		$(this).parent(".content__number--wrapper").siblings(".cart__item--box")
		.children(".box").text(bagValue);

		var valuemod = $(".modal__value--box").text().trim();

		$(".content__tovar--item[data-tovar='active']").children(".tovar__bags--buy")
		.children(".tovar__bags--buy--value--inner").children(".bags__value--inner")
		.children(".value__bags").text(valuemod);
	});

	$(document).on("click",".value__arrow--down" ,function(){
		var bag = $(this).siblings(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 1){
			return;
		}
		else{
			bagValue--;
			bag.text(bagValue);
		}

		$(this).parent(".tovar__bags--buy--value--inner")
		.siblings(".cart__item--box").children(".box").text(bagValue);

		$(this).parent(".content__number--wrapper").siblings(".cart__item--box")
		.children(".box").text(bagValue);

		var valuemod = $(".modal__value--box").text().trim();

		$(".content__tovar--item[data-tovar='active']").children(".tovar__bags--buy")
		.children(".tovar__bags--buy--value--inner").children(".bags__value--inner")
		.children(".value__bags").text(valuemod);
	});


	$(".header__button").on("click", function(){
		$('html,body').stop().animate({ scrollTop: $('#point').offset().top }, 500);
	});


	/* Модальное окно корзины */

	$(".header__inner--cart").on("click", function(){
		$("body").addClass("body");
		$(".modal__cart").fadeIn(100);
	});

	$(".cart__cross").on("click", function(){
		$("body").removeClass("body");
		$(".modal__cart").fadeOut(100);
	});


	/* Модальное окно транспортной компании */

	$(".delivery__value--edit").on("click", function(){
		$(".modal").fadeOut(100);

		$("body").addClass("body");
		$(".modal__trans").fadeIn(100);
	});

	$(".transport__cross").on("click", function(){
		$("body").removeClass("body");
		$(".modal__trans").fadeOut(100);
	});

	var transport__com;

	$(".trans__choose").on("click", function(){
		if($(this).hasClass("transport__active")){
			$(".trans__choose").removeClass("transport__active");
			$(".trans__choose").text("Выбрать");
			$(".trans__buttons").slideUp(100);
		}
		else{
			$(".trans__choose").removeClass("transport__active");
			$(".trans__choose").text("Выбрать");
			$(this).addClass("transport__active");
			$(this).text("Выбрано");
			$(".trans__buttons").slideDown(100).css("display", "flex");

			if($(this).hasClass("choose__man")){
				$(".delivery__value").text("Выбор заказчика");
			}
			else{
				transport__com = $(this).siblings(".trans__img--inner")
				.children(".trans__name").text().trim();
				$(".delivery__value").text(transport__com);
			}
		}
	});



	/* Механизм включения окна товара и появлении динамического
	контента */

	$(".card__open").on("click", function(){

		$(this).parent(".content__tovar--item").attr("data-tovar", "active");

		$(".modal").fadeOut(100);
		$("body").addClass("body");

		var imgCard = $(this).children(".content__item--img").attr("src");

		var art = $(this).siblings(".art__info")
		.children(".bold").children(".art").text().trim();
		var nameBag = $(this).siblings(".art__info")
		.children(".name").text().trim();
		var size = $(this).siblings(".size__info")
		.children(".size").text().trim();
		var price = $(this).siblings(".price__info")
		.children(".price").text().trim();
		var numberBag = $(this).siblings(".box__info")
		.children(".col").text().trim();

		var titleBag = $(this).attr("data-title");

		var boxCart = $(this).siblings(".content__number--inner")
		.children(".content__number--wrapper")
		.children(".value__bags").text().trim();

		$(".card__name").text(titleBag);
		$(".card__img").attr("src", imgCard);
		$(".art__modal").text(art);
		$(".artname").text(nameBag);
		$(".sizem").text(size);
		$(".pricem").text(price);
		$(".numberbag__modal").text(numberBag);

		$(".modal__value--box").text(boxCart);


		// Галочка в модальном окне товара

		if($(this).parent(".content__tovar--item").hasClass("active__tovar")){
			$(".card__cart").text("В корзине");
		}
		else{
			$(".card__cart").text("В корзину");
		}

		
		$(".modal__card").fadeIn(100);
	});





	$(".cards__cross").on("click", function(){
		$("body").removeClass("body");
		$(".modal__card").fadeOut(100);

		$(".content__item").attr("data-tovar", "");
	});

	var numberDelete = $(".cart__item--inner--card").children(".cart__item--del").length;

	if(numberDelete == 0){
		numberDelete == 0;
		$(".cart__empty").fadeIn(0);
	}
	else{
		$(".cart__empty").fadeOut(0);
	}


	$(".transport__continue").on("click", function(){
		$("body").removeClass("body");
		$(".modal").fadeOut(0);
	});

	$(".transport__oplata--button").on("click", function(){
		$(".modal").fadeOut(0);
		$(".modal__cart").fadeIn(100);
	});

	// Удаление товара с корзины

	$(document).on("click", ".cart__item--delete", function(){
		$(this).parent(".cart__item").remove();

		numberDelete--;
		if(numberDelete == 0){
			numberDelete == 0;
			$(".cart__empty").fadeIn(0);
		}
		else{
			$(".cart__empty").fadeOut(0);
		}

		// Удаление класса активного товара и галочки

		var del = $(this).siblings(".cart__item--name").text().trim();
		del = parseInt(del.match(/\d+/));

		var tem = $(".art:contains('Арт. "+del+"')").parent(".bold").parent(".art__info")
		.siblings(".tovar__button");

		tem.text("В корзину");

		tem.parent(".content__item").removeClass("active__tovar");

		index--;

		$(".cart__index").text(index);

	});


	// Добавление товара в корзину

	var index = 0;
	$(".cart__index").text(index);

	$(".tovar__button").on("click", function(){
		var activeTovar = $(this).parent(".content__tovar--item");

		if(activeTovar.hasClass("active__tovar")){
			activeTovar.removeClass("active__tovar");

			numberDelete--;
			index--;

			if(numberDelete == 0){
				numberDelete == 0;
				$(".cart__empty").fadeIn(0);
			}
			else{
				$(".cart__empty").fadeOut(0);
			}

			$(".cart__index").text(index);

			// Галочка в кнопке
			$(this).text("В корзину");

			// Удаление товара
			var artCart = $(this).siblings(".art__info")
			.children(".bold").children(".art").text().trim();

			artCart = parseInt(artCart.match(/\d+/));

			$(".cart__item[data-art="+artCart+"]").remove();

		}
		else{
			activeTovar.addClass("active__tovar");

			numberDelete++;
			index++;

			if(numberDelete == 0){
				numberDelete == 0;
				$(".cart__empty").fadeIn(0);
			}
			else{
				$(".cart__empty").fadeOut(0);
			}

			$(".cart__index").text(index);

			// Галочка в кнопке

			$(this).text("В корзине");


			// Добавление карточки в корзину

			var imgCart = $(this).siblings(".content__item--img--inner")
			.children(".content__item--img").attr("src");

			var nameCart = $(this).siblings(".art__info")
			.text().trim();

			var boxCart = $(this).siblings(".content__number--inner")
			.children(".content__number--wrapper").children(".value__bags").text().trim();
			
			var artCart = $(this).siblings(".art__info")
			.children(".bold").children(".art").text().trim();

			artCart = parseInt(artCart.match(/\d+/));

			$(".cart__item--inner").append('<div class="cart__item" data-art="'+artCart+'"><div class="cart__item--img--inner"><img src="'+imgCart+'" alt="товар" class="cart__item--img"></div><div class="cart__item--name">'+nameCart+'</div><div class="cart__item--box">Коробок - <span class="box">'+boxCart+'</span></div><div class="content__number--wrapper"><div class="content__number--edit value__arrow--down"><span class="minus">-</span></div><div class="content__number--value value__bags">'+boxCart+'</div><div class="content__number--edit value__arrow--up"><span class="plus">+</span></div></div><button class="button cart__item--delete">Удалить</button></div>');
		}
	});


	// Добавление товара в корзину с модального окна

	$(".button__modal--cart").on("click", function(){
		var checked = $(".content__item[data-tovar='active']");

		var temp = $(".content__item[data-tovar='active']");

		if(checked.hasClass("active__tovar")){
			checked.removeClass("active__tovar");

			numberDelete--;
			index--;

			if(numberDelete == 0){
				numberDelete == 0;
				$(".cart__empty").fadeIn(0);
			}
			else{
				$(".cart__empty").fadeOut(0);
			}

			$(".cart__index").text(index);

			// Галочка в кнопке

			$(".ca").text("В корзину");

			// Удаление товара

			var artCartMod = temp.children(".art__info").children(".bold")
			.children(".art").text().trim();

			artCartMod = parseInt(artCartMod.match(/\d+/));

			$(".cart__item[data-art="+artCartMod+"]").remove();


		}
		else{
			checked.addClass("active__tovar");

			numberDelete++;
			index++;

			if(numberDelete == 0){
				numberDelete == 0;
				$(".cart__empty").fadeIn(0);
			}
			else{
				$(".cart__empty").fadeOut(0);
			}

			$(".cart__index").text(index);

			// Галочка в кнопке

			$(".ca").text("В корзине");

			// Добавление карточки в корзину
			var c = $(".modal__value--box").text();
			$(".content__item[data-tovar='active']").children(".content__number--inner")
			.children(".content__number--wrapper").children(".value__bags").text(c);

			var imgCartMod = temp.children(".content__item--img--inner")
			.children(".content__item--img").attr("src");

			var nameCartMod = temp.children(".art__info").text().trim();

			var boxCartMod = temp.children(".content__number--inner")
			.children(".content__number--wrapper").children(".value__bags").text().trim();

			var artCartMod = temp.children(".art__info").children(".bold")
			.children(".art").text().trim();

			artCartMod = parseInt(artCartMod.match(/\d+/));

			$(".cart__item--inner").append('<div class="cart__item" data-art="'+artCartMod+'"><div class="cart__item--img--inner"><img src="'+imgCartMod+'" alt="товар" class="cart__item--img"></div><div class="cart__item--name">'+nameCartMod+'</div><div class="cart__item--box">Коробок - <span class="box">'+boxCartMod+'</span></div><div class="content__number--wrapper"><div class="content__number--edit value__arrow--down"><span class="minus">-</span></div><div class="content__number--value value__bags">'+boxCartMod+'</div><div class="content__number--edit value__arrow--up"><span class="plus">+</span></div></div><button class="button cart__item--delete">Удалить</button></div>');
		}
	});


	$(".cart__submit--button").on("click", function(){
		var nameVal = $(".nameZ").val();
		var cityVal = $(".cityZ").val();
		var phoneVal = $(".phoneZ").val();
		var emailVal = $(".emailZ").val();
		var deliveryVal = $(".delivery__value").text();

		var artArr = [];
		var boxArr = [];

		$(".cart__item").each(function(i){
			
			var artNum = $(this).attr("data-art");
			var boxNum = $(this).children(".cart__item--box")
			.children(".box").text().trim();

			artArr.push(artNum);
			boxArr.push(boxNum);

		});

		if(!nameVal){
			alert("Имя не введено!");
		}
		else if(!cityVal){
			alert("Город не введен!");
		}
		else if(!phoneVal){
			alert("Телефон не введен!");
		}
		else if(!emailVal){
			alert("Почта не введена!");
		}
		else if(!deliveryVal){
			alert("Доставка не выбрана!");
		}
		else if(artArr.length == 0){
			alert("Корзина пустая!");
		}
		else{
			$.ajax({

				method: "POST",
				url: "mail.php",
				data: {
					name: nameVal,
					city: cityVal,
					phone: phoneVal,
					email: emailVal,
					delivery: deliveryVal,
					art: artArr,
					box: boxArr
				},
				success: function(){
					$(".modal").fadeOut(0);
					alert("Заявка успешно отправлена!");
					$(".nameZ").val("");
					$(".cityZ").val("");
					$(".phoneZ").val("");
					$(".emailZ").val("");
				}

			});
		}

	});

});