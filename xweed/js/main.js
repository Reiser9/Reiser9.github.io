$(document).ready(function(){

    const closeMenu = () => {
        $("body").removeClass("scroll");
        $(".mobile__menu").removeClass("active");
    }

	$(".faq__item--wrapper").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".faq__item").children(".faq__item--text--wrap").children(".faq__item--text").slideUp(200);
        }
        else{
            $(".faq__item--wrapper").removeClass("active");
            $(".faq__item--wrapper").children(".faq__item").children(".faq__item--text--wrap").children(".faq__item--text").slideUp(200);

            $(this).addClass("active");
            $(this).children(".faq__item").children(".faq__item--text--wrap").children(".faq__item--text").slideDown(200);
        }
    });

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        closeMenu();

		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 400);
	});

    $(".main__address--copy").on("click", function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(".main__address").children("span").text()).select();
        document.execCommand("copy");
        $temp.remove();
        alert("Copied");
    });

    $(".menu__button").on("click", function(){
        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu--close").on("click", function(){
        closeMenu();
    });

});