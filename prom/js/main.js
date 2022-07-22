$(document).ready(function(){

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
        $(this).parent(".info__tabs").siblings(".info__tab--content").children(".tab__content").removeClass("active");

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