$(document).ready(function(){

	$(".howit__item--title--inner").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings(".howit__item--content").slideUp(300);
        }
        else{
            $(".howit__item--title--inner").removeClass("active");
            $(".howit__item--content").slideUp(300);

            $(this).addClass("active");
            $(this).siblings(".howit__item--content").slideDown({
                duration: 300,
                start: function () {
                    $(this).css('display', 'flex');
                }
            });
        }
    });

    const closeMenu = () => {
        $("body").removeClass("scroll");
        $(".mobile__menu").removeClass("active");
    }

    $(".menu__button").on("click", function(){
        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    $(".mobile__menu--cross").on("click", function(){
        closeMenu();
    });

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		closeMenu();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

});