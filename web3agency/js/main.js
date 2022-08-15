$(window).on("load", function(){
    $(".preloader").removeClass("active");

	setInterval(function(){
        if($(".spec1").hasClass("active")){
            $(".spec1").removeClass("active");
            $(".spec2").addClass("active");
        }
        else if($(".spec2").hasClass("active")){
            $(".spec2").removeClass("active");
            $(".spec3").addClass("active");
        }
        else{
            $(".spec3").removeClass("active");
            $(".spec1").addClass("active");
        }
    }, 3000);

    const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

    $(".go").on("click", function(e){
        e.preventDefault();
        close();

        let point = $(this).attr("data-point");
        let pointTop = $("#"+point).offset().top;
        $('body,html').animate({scrollTop: pointTop}, 500);
    });

    // $(".projects__tab").on("click", function(){
    //     if(!$(this).hasClass("active")){
    //         $(".projects__tab").removeClass("active");
    //         $(this).addClass("active");

    //         let tab = $(this).attr("data-tab");
    //         $(".projects__content--tab").removeClass("active");
    //         $(".projects__content--tab[data-tab="+tab+"]").addClass("active");
    //     }
    // });

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