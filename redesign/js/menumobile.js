/* Открытие бургер меню */

var menuMobile = $(".mobile__menu--inner");

$(".menu__mobile--icon").on("click", function(){
	menuMobile.toggleClass("mobile__on");
});