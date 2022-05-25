$(document).ready(function(){

    const close = () => {
        $("body").removeClass("scroll");
        $(".cross").removeClass("active");
        $(".menu").addClass("active");
        $(".header").removeClass("fixed");
        $(".modal__menu").removeClass("active");
        $("body").removeClass("header__isFixed");
    }

    const closeModal = () => {
        $("body").removeClass("scroll");
        $(".modal").removeClass("active");
    }

	$(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(this).removeClass("active");
        $(".cross").addClass("active");
        $(".header").addClass("fixed");
        $(".modal__menu").addClass("active");
        $("body").addClass("header__isFixed");
    });

    $(".cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

    $(".single__faq").on("click", function(){
        $(this).toggleClass("active");
        $(this).children(".single__faq--answer").slideToggle(100);
    });

    $(".modal").click( function(e){
        if(!$(e.target).closest(".modal__content").length){
            closeModal();
        }
    });

    $(".modal__cross").on("click", function(){
        closeModal();
    });

    $(".event__modal").on("click", function(e){
        e.preventDefault();
        closeModal();
        $("body").addClass("scroll");
        $(".modal[data-modal="+$(this).attr("data-modal")+"]").addClass("active");
    });

});