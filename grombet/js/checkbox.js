$(document).ready(function(){

	var checkbox = $(".checkbox");
	var money = $(".checkbox__text--money");
	var free = $(".checkbox__text--free");
	var iconMoney = $(".money");
	var iconFree = $(".free");

	$(".checkbox").on("click", function(){
		money.toggleClass("checkbox__grey");
		money.toggleClass("checkbox__red");
		iconMoney.toggleClass("icon--grey");
		iconMoney.toggleClass("icon--black");

		free.toggleClass("checkbox__grey");
		free.toggleClass("checkbox__red");
		iconFree.toggleClass("icon--grey");
		iconFree.toggleClass("icon--black");

		checkbox.toggleClass("money__checkbox");


		$(".forecast__content.free__inner").removeClass("active__block").addClass("disabled__block");
		$(".forecast__content.money__inner").removeClass("disabled__block").addClass("active__block");

		$(".forecast__content.active__block").removeClass("money__inner").addClass("free__inner");
		$(".forecast__content.disabled__block").removeClass("free__inner").addClass("money__inner");




	});




	$(".date__inner").on("click", function(){
		
		$(this).children(".date__text").children(".upload").toggleClass("translate");

		$(this).siblings(".fade__in").removeClass("disabled__list").addClass("active__list");
		$(this).siblings(".show__in").removeClass("active__list").addClass("disabled__list");

		$(this).siblings(".disabled__list").removeClass("show__in").addClass("fade__in");
		$(this).siblings(".active__list").removeClass("fade__in").addClass("show__in");


		$(this).parents(".forecast__inner").siblings(".fade__in").removeClass("disabled__list").addClass("active__list");
		$(this).parents(".forecast__inner").siblings(".show__in").removeClass("active__list").addClass("disabled__list");

		$(this).parents(".forecast__inner").siblings(".disabled__list").removeClass("show__in").addClass("fade__in");
		$(this).parents(".forecast__inner").siblings(".active__list").removeClass("fade__in").addClass("show__in");


		

	});
});