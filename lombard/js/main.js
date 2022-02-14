$(document).ready(function(){

	$(".header__menu--icon--inner").on("click", function(){
		$(".mobile__menu").toggleClass("active");
		$("body").toggleClass("scroll");
	});

	// Закрытие меню если ширина > 998px
	$(window).resize(function(){
		if($(window).width() > 998){
			$(".mobile__menu").removeClass("active");
			$("body").removeClass("scroll");
		}
	});

	// Закрыть модальное окно
	$(".modal__close").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal__inner").removeClass("active");
	});

	// Открытие модального окна
	$(".modal__fade").on("click", function(){
		$(".mobile__menu").removeClass("active");
		$("body").addClass("scroll");
		$(".modal__inner").addClass("active");
	});

	// Калькулятор
	function calcPast(min, max, copy, past){
		if($("."+copy).val() > max){
			$("."+copy).val(max);
		}
		else if($("."+copy).val() < min){
			$("."+copy).val(min);
		}
		let val = $("."+copy).val();
		$("."+past).text(val);
	}

	$(".days__calc").on("focusout", function(){
		calcPast(1, 365, "days__calc", "day");
	});

	$(".sum__calc").on("focusout", function(){
		calcPast(15000, 1000000, "sum__calc", "money");
	});

	// Маски
	$.fn.setCursorPosition = function(pos) {
	  if ($(this).get(0).setSelectionRange) {
	    $(this).get(0).setSelectionRange(pos, pos);
	  } else if ($(this).get(0).createTextRange) {
	    var range = $(this).get(0).createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', pos);
	    range.moveStart('character', pos);
	    range.select();
	  }
	};

	$(".number").on("click", function(){
	  $(this).setCursorPosition(3);
	}).mask("+7(999) 999-9999", {autoclear: false});

	$(".year").on("click", function(){
	  $(this).setCursorPosition(0);
	}).mask("9999", {autoclear: false});

	$(".probeg").on("click", function(){
	  $(this).setCursorPosition(0);
	}).mask("999999", {autoclear: false});

	$(".ob").on("click", function(){
	  $(this).setCursorPosition(0);
	}).mask("9.9", {autoclear: false});

});