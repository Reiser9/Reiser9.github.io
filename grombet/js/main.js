$(document).ready(function(){

	$(document).mouseup(function (e) {
	    var container2 = $(".slide__menu--info");
	    if (container2.has(e.target).length === 0){
	    	container2.removeClass("transform__info");
	    }
	  });

	$(".fade__button--all").on("click", function(){
		$(".seo__work--inner").slideToggle(500);

		var buttonText = $(".fade__button--all").text().trim();
		if(buttonText == "Подробнее"){
			$(".fade__button--all").text("Скрыть");
		}
		else if(buttonText == "Скрыть"){
			$(".fade__button--all").text("Подробнее");
		}
	});

	$(".fade__button--fadeOut").on("click", function(){
		$(".seo__work").slideUp(300);
		$(".fade__button--fadeIn").fadeIn(100);
	});

	$(".fade__button--fadeIn").on("click", function(){
		$(".seo__work").slideDown(300);
		$(".fade__button--fadeIn").fadeOut(100);
	});

	$(".info__menu--link").on("click", function(e){
		e.preventDefault();
		$(".slide__menu--info").toggleClass("transform__info");
	});

		var items4 = $(".teams__inner").children(".teams__box").length;
		var leftArrow4 = $('.l');
	    var rightArrow4 = $('.r');
	    var carouselList4 = $('.teams__inner');
	 
	    var pixelsOffset4 = 210;
	    var itemNumbers2 = $(".teams__hider").css("width").replace(/[^0-9]/gim, "");
	    itemNumbers2 = itemNumbers2 / pixelsOffset4;
	    var number4 = (items4 - itemNumbers2) * pixelsOffset4;
	    var currentLeftValue4 = 0;
	 
	    leftArrow4.click(function() {
	    		if(currentLeftValue4 >= 0 ){
	    			currentLeftValue4 = -number4;
	    	    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
	    		}
	    		else{
	    			currentLeftValue4 += pixelsOffset4;
	    	    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
	    		}
	    });
	 
	    rightArrow4.click(function() {
	    		if(currentLeftValue4 <= (-number4)){
	    			currentLeftValue4 = 0;
	    	    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
	    		}
	    		else{
	    			currentLeftValue4 -= pixelsOffset4;
	    	    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
	    		}
	    });


	var modalIconOff = $(".modal__menu--iconin");
	var modalIconOn = $(".menu__icon");
	var modalMenu = $(".modal__menu");

	var moneyInner = $(".inner__money");
	var freeInner = $(".inner__free");


	var match = $(".inner__mobile--menu");

	modalIconOff.on("click", function(){
		modalMenu.removeClass("menu__none");
	});

	modalIconOn.on("click", function(){
		modalMenu.addClass("menu__none");
	});

	$(".question__question--inner").on("click", function(){
		/* Переворачивание стрелки */

		$(this).children(".question__slide--icon").toggleClass("question__slide--icon--rotate");
		$(this).toggleClass("question__question--inner--transform");
		$(this).parent(".question__card").children(".question__img--inner").fadeToggle(0);
		$(this).parent(".question__card").children(".question__text--fade").fadeToggle(0);
	});

	var select = $(".select");

	select.on("click", function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find(".select__inner").fadeOut(100);
		}
		else if(!$(this).hasClass("active")){
			$(".select__inner").fadeOut(100);
			$(this).addClass("active");
			$(this).find(".select__inner").fadeIn(100);
		}
	});

	$(".select__item").on("click", function(){
		$(".select__inner").fadeOut(100);
	});

	$(".etUnit.etDays").css("display", "none");


	match.on("click", function(){
		$(this).find(".fade__inner").fadeToggle(100);
	});



	$(".sports__inner").on("click", function(){
		if($(".sports__inner").hasClass("active__sport")){
			$(".sports__inner").removeClass("active__sport");
		}
		$(this).addClass("active__sport");


		if($(this).hasClass("ufc__fight")){
			$(".inners").fadeOut(100);
			$(".ufc__box").fadeIn(100);
		}
		else if($(this).hasClass("football")){
			$(".inners").fadeOut(100);
			$(".football__inn").fadeIn(100);
		}
		else if($(this).hasClass("tenis")){
			$(".inners").fadeOut(100);
			$(".tenis__inn").fadeIn(100);
		}
		else if($(this).hasClass("basketball")){
			$(".inners").fadeOut(100);
			$(".basketball__inn").fadeIn(100);
		}
		else if($(this).hasClass("baseball")){
			$(".inners").fadeOut(100);
			$(".baseball__inn").fadeIn(100);
		}
		else if($(this).hasClass("hoccey")){
			$(".inners").fadeOut(100);
			$(".hoccey__inn").fadeIn(100);
		}


	});





	$(".chooseme__card").on("mouseenter", function(){
		$(this).children(".chooseme__card--hover").css("opacity", "1");
	});

	$(".chooseme__card").on("mouseleave", function(){
		$(this).children(".chooseme__card--hover").css("opacity", "0");
	});







	$('.comment__create--button').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#some__point').offset().top }, 1000);
	  e.preventDefault();
	});

	$(document).on('change', 'input[type="file"]', function () {
	    $(".label__upload").fadeOut(100);
	});


	var items = $(".carousel__list").children(".reviews__item").length;
	var leftArrow = $('.arrow__left');
	var rightArrow = $('.arrow__right');
	var carouselList = $('.carousel__list');
	 
	var pixels = $(".carousel__hider").css("width").substring(0,3);
	var pixelsOffset = parseInt(pixels);
	var number = items * pixelsOffset;
	var currentLeftValue = 0;
	 
	    leftArrow.click(function() {
	    	if(currentLeftValue >= 0 ){
	    		currentLeftValue = -number;
	    		currentLeftValue += pixelsOffset;
	        	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	    	}
	    	else{
	    		currentLeftValue += pixelsOffset;
	        	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	    	}
	    });
	 
	    rightArrow.click(function() {
	    	if(currentLeftValue <= (-number + pixelsOffset)){
	    		currentLeftValue = 0;
	        	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	    	}
	    	else{
	    		currentLeftValue -= pixelsOffset;
	        	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	    	}
	    });


		var items2 = $(".carousel__contentt").children(".reviews__img--inn").length;
		var leftArrow2 = $('.arrow__l');
	    var rightArrow2 = $('.arrow__r');
	    var carouselList2 = $('.carousel__contentt');
	 
	    var pixels2 = $(".carousel__hide").css("width").substring(0,3);
	    var pixelsOffset2 = parseInt(pixels2);
	    var number2 = items2 * pixelsOffset2;
	    var currentLeftValue2 = 0;
	 
	    leftArrow.click(function() {
	    		if(currentLeftValue2 >= 0 ){
	    			currentLeftValue2 = -number2;
	    			currentLeftValue2 += pixelsOffset2;
	    	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	    		}
	    		else{
	    			currentLeftValue2 += pixelsOffset2;
	    	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	    		}
	    });
	 
	    rightArrow.click(function() {
	    		if(currentLeftValue2 <= (-number2 + pixelsOffset2)){
	    			currentLeftValue2 = 0;
	    	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	    		}
	    		else{
	    			currentLeftValue2 -= pixelsOffset2;
	    	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	    		}
	    });


	    	var items3 = $(".sponsors__list").children(".sponsors__item").length;
	    	var leftArrow3 = $('.left__arrow');
	        var rightArrow3 = $('.right__arrow');
	        var carouselList3 = $('.sponsors__list');
	     
	        var pixelsOffset3 = 300;
	        var itemNumbers = $(".sponsors__hider").css("width").replace(/[^0-9]/gim, "");
	        itemNumbers = itemNumbers / pixelsOffset3;
	        var number3 = (items3 - itemNumbers) * pixelsOffset3;
	        var currentLeftValue3 = 0;
	     
	        leftArrow3.click(function() {
	        		if(currentLeftValue3 >= 0 ){
	        			currentLeftValue3 = -number3;
	        			currentLeftValue3 += pixelsOffset3;
	        	    	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
	        		}
	        		else{
	        			currentLeftValue3 += pixelsOffset3;
	        	    	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
	        		}
	        });
	     
	        rightArrow3.click(function() {
	        		if(currentLeftValue3 <= (-number3 + pixelsOffset3)){
	        			currentLeftValue3 = 0;
	        	    	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
	        		}
	        		else{
	        			currentLeftValue3 -= pixelsOffset3;
	        	    	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
	        		}
	        });


	$(".sponsors__list").swipe( {
        swipeLeft:leftSwipe2,
        swipeRight:rightSwipe2,
        threshold:0
	});

	$(".carousel__list").swipe( {
        swipeLeft:leftSwipe,
        swipeRight:rightSwipe,
        threshold:0
	});

	$(".teams__inner").swipe( {
        swipeLeft:leftSwipeTeam,
        swipeRight:rightSwipeTeam,
        threshold:0
	});

	function leftSwipe2(){
		if(currentLeftValue3 <= (-number3 + pixelsOffset3)){
			currentLeftValue3 = 0;
			carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
		}
		else{
			currentLeftValue3 -= pixelsOffset3;
		  	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
		}
	}

	function rightSwipe2(){
		if(currentLeftValue3 >= 0 ){
			currentLeftValue3 = -number3;
			currentLeftValue3 += pixelsOffset3;
		    carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
		}
		else{
			currentLeftValue3 += pixelsOffset3;
		   	carouselList3.animate({ left : currentLeftValue3 + "px"}, 300);
		}
	}



	function leftSwipe(){
		if(currentLeftValue <= (-number + pixelsOffset)){
			currentLeftValue = 0;
		   	carouselList.animate({ left : currentLeftValue + "px"}, 300);
		}
		else{
			currentLeftValue -= pixelsOffset;
		   	carouselList.animate({ left : currentLeftValue + "px"}, 300);
		}
			
		if(currentLeftValue2 <= (-number2 + pixelsOffset2)){
			currentLeftValue2 = 0;
	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
		}
		else{
			currentLeftValue2 -= pixelsOffset2;
		   	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
		}
	}

	function rightSwipe(){
		if(currentLeftValue >= 0 ){
	    	currentLeftValue = -number;
	    	currentLeftValue += pixelsOffset;
	       	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	    }
	    else{
	    	currentLeftValue += pixelsOffset;
	       	carouselList.animate({ left : currentLeftValue + "px"}, 300);
	   	}

	   		if(currentLeftValue2 >= 0 ){
	   			currentLeftValue2 = -number2;
	   			currentLeftValue2 += pixelsOffset2;
	   	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	   		}
	   		else{
	   			currentLeftValue2 += pixelsOffset2;
	   	    	carouselList2.animate({ left : currentLeftValue2 + "px"}, 300);
	   		}

	}


	function leftSwipeTeam(){
			if(currentLeftValue4 <= (-number4)){
				currentLeftValue4 = 0;
		    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
			}
			else{
				currentLeftValue4 -= pixelsOffset4;
		    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
			}
	}

	function rightSwipeTeam(){
			if(currentLeftValue4 >= 0 ){
				currentLeftValue4 = -number4;
		    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
			}
			else{
				currentLeftValue4 += pixelsOffset4;
		    	carouselList4.animate({ left : currentLeftValue4 + "px"}, 300);
			}

	}






	var dataset = [
	  {
	    value: 25,
	    color: '#00cf7f',
	    profit: "+400"
	  }, {
	    value: 75,
	    color: '#4895fa',
	    profit: "-300"
	  }
	];



	var maxValue = 25;
	var container = $('.circle__item');
	 
	var addSector = function(data, startAngle, collapse) {
	  var sectorDeg = 3.6 * data.value;
	  var skewDeg = 90 + sectorDeg;
	  var rotateDeg = startAngle;
	  if (collapse) {
	    skewDeg++;
	  }
	 
	  var sector = $('<div>', {
	    'class': 'sector',
	    "data-color": data.color,
	    "data-value": data.profit
	  }).css({
	    'background': data.color,
	    'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
	  });
	  container.append(sector);
	 
	  return startAngle + sectorDeg;
	};
	 
	dataset.reduce(function (prev, curr) {
	  return (function addPart(data, angle) {
	    if (data.value <= maxValue) {
	      return addSector(data, angle, true);
	    }
	 
	    return addPart({
	      value: data.value - maxValue,
	      color: data.color,
	      profit: data.profit
	    }, addSector({
	      value: maxValue,
	      color: data.color,
	      profit: data.profit
	    }, angle, true));
	  })(curr, prev);
	}, 0);

	$(".sector").on("click", function(){
	  $(".text__inner").css("display", "flex");
	  var color = $(this).attr("data-color");
	  var value = $(this).attr("data-value");
	  $(".text__inner").css("color", color);
	  $(".fill__svg").css("fill", color);
	  $(".profit__value").text(value);
	});



	$(".foto").on("click", function(){
		var img = $(this).children(".foto__comment").attr("src");
		$(".modal__foto--img").attr("src", img);
		$(".modal__foto").fadeIn(100).css("display", "flex");
	});

	$(".cros").on("click", function(){
		$(".modal__foto").fadeOut(100).css("display", "none");
	});



	// function LightenDarkenColor(col, amt) {
	  
	//     var usePound = false;
	  
	//     if (col[0] == "#") {
	//         col = col.slice(1);
	//         usePound = true;
	//     }
	 
	//     var num = parseInt(col,16);
	 
	//     var r = (num >> 16) + amt;
	 
	//     if (r > 255) r = 255;
	//     else if  (r < 0) r = 0;
	 
	//     var b = ((num >> 8) & 0x00FF) + amt;
	 
	//     if (b > 255) b = 255;
	//     else if  (b < 0) b = 0;
	 
	//     var g = (num & 0x0000FF) + amt;
	 
	//     if (g > 255) g = 255;
	//     else if (g < 0) g = 0;
	 
	//     return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
	  
	// }


	// $(".sector").on("mouseenter", function(){
	// 	var color = $(this).attr("data-color");
	// 	$(this).css("background", LightenDarkenColor(color, 50));
	// });

	$(".sector").on("mouseleave", function(){
		var color = $(this).attr("data-color");
		$(this).css("background", color);
	});


	$('.count1').spincrement({
		from: 100000,
		to: 1000000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count2').spincrement({
		from: 13000000,
		to: 13514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count3').spincrement({
		from: 12000000,
		to: 12514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});
});


jQuery(document).ready(function() {
	var date = $(".eTimer").attr("data-time");
	jQuery(".eTimer").eTimer({
		etType: 0, etDate: date, etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: "Arial Black", etTextColor: "white", etPaddingTB: 15, etPaddingLR: 15, etBackground: "transparent", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "transparent", etShadow: " 0px 0px 0px 0px transparent", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "transparent", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "transparent", etNumberShadow: "inset 0px 0px 10px 0px transparent"
	});
});