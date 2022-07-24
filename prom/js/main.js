$(document).ready(function(){

    $(".modal__open").on("click", function(e){
        e.preventDefault();

        $("body").addClass("scroll2");
        $(".modal").addClass("active");
    });

    $(".modal").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    });

    $(".modal__content").on("click", function(e){
        e.stopPropagation();
    });

    $(".mobile__tab").on("click", function(){
        $(this).children(".contact__item--icon").toggleClass("active");
        $(this).siblings(".mobile__tab--content").toggleClass("active");
    });

	$(".password__check").on("click", function(){
        if($(this).hasClass("active")){
            $(this).siblings("input").attr("type", "password");
            $(this).removeClass("active");
        }
        else{
            $(this).siblings("input").attr("type", "text");
            $(this).addClass("active");
        }
    });

    $(".tab").on("click", function(e){
        e.preventDefault();

        $(this).siblings(".tab").removeClass("active");
        $(this).parent(".tabs").siblings(".tab__tab").children(".tab__content").removeClass("active");

        let tab = $(this).attr("data-tab");

        $(this).addClass("active");
        $(".tab__content[data-tab="+tab+"]").addClass("active");
    });

    const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on("click", function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

});