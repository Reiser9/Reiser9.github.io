$(document).ready(function(){

	var austDay = new Date();
	austDay = new Date(austDay.getFullYear(), 10 - 1, 16);
	$('.timer').countdown({until: austDay, labels: ['Лет', 'Месяцев', 'Недель', 'Дней', 'Часов', 'Минут', 'Секунд']});

	$(".slider__cars").slick({
		arrows: false,
		adaptiveHeight: true
	});

});