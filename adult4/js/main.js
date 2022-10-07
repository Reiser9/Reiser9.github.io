$(document).ready(function(){

	const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    const open = () => {
        $("body").addClass("scroll2");
        $(".modal__city").addClass("active");
    }

    $(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".modal__cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

    $(".salon__program--item--show").on("click", function(e){
        e.preventDefault();
        $(this).siblings(".salon__program--item--desc").addClass("active");
        $(this).remove();
    });

    $(".city__button").on("click", function(e){
        e.preventDefault();
        open();
    });

    $(".modal__city").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

    $(".modal__city--content").on("click", function(e){
        e.stopPropagation();
    });

    $(".modal__city--cross").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal__city").removeClass("active");
    });

});