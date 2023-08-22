$(document).ready(function(){

    const closeMenu = () => {
        $(".cross").removeClass("active");
        $(".menu").addClass("active");
        
        $(".header__inner").removeClass("active");
        $(".mobile__menu").removeClass("active");
    }

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        
        if($("#"+point).length > 0){
            $('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
            closeMenu();
        }
	});

	$(".menu").on("click", function(){
        $(this).removeClass("active");
        $(".cross").addClass("active");

        $(".header__inner").addClass("active");
        $(".mobile__menu").addClass("active");
    });

    $(".cross").on("click", function(){
        closeMenu();
    });

    // Faq
    $(".main__faq--item").on("click", function(e){
        e.preventDefault();

        if(!$(this).hasClass("active")){
            const index = $(this).index();
            
            $(".main__faq--item").removeClass("active");
            $(".main__faq--content").removeClass("active");

            $(this).addClass("active");
            $(".main__faq--content").eq(index).addClass("active");

            $('body,html').animate({scrollTop: $(".main__faq--contents").offset().top}, 500);
        }
        else{
            $(".main__faq--item").removeClass("active");
            $(".main__faq--content").removeClass("active");
        }
    });

    // Tabs
    $(".token__tab").on("click", function(e){
        e.preventDefault();

        $(".token__tab").removeClass("active");
        $(".token__content").removeClass("active");

        $(this).addClass("active");
        $(".token__content").eq($(this).index()).addClass("active");
    });

    // Tokenomics
    $(".tokenomics__chart--item").on("mouseenter", function(){
        const index = $(this).index();

        $(".tokenomics__point").eq(index).addClass("active");
    });

    $(".tokenomics__chart--item").on("mouseleave", function(){
        $(".tokenomics__point").removeClass("active");
    });

    $(".tokenomics__point").on("mouseenter", function(){
        const index = $(this).index();

        $(".tokenomics__chart--item").eq(index).addClass("active");
    });

    $(".tokenomics__point").on("mouseleave", function(){
        $(".tokenomics__chart--item").removeClass("active");
    });

    // Roadmap
    const rotate = () => {
		let scroll = $(".roadmap__content").offset().top;
        let sc = $(window).scrollTop();
        let heightBlock = $(".roadmap__content").height();

		if(sc - scroll > -320 && sc - scroll <= heightBlock - 320){
			if($(window).width() <= 768){
				$(".roadmap__progress").css("transform", "translateX(0) translateY("+(sc - scroll + 300)+"px)");
			}
			else{
				$(".roadmap__progress").css("transform", "translateX(-50%) translateY("+(sc - scroll + 300)+"px)");
			}
		}
	}

	rotate();
	$(document).scroll(function(){
		rotate();
	});

    // Slider
    var swiper = new Swiper(".solve__carousel", {
        slidesPerView: 1,
        spaceBetween: 12,
        autoHeight: true,
        navigation: {
            nextEl: ".solve__next",
            prevEl: ".solve__prev",
        },
    });

    if($(window).width() > 768){
        swiper.destroy();
    }
    else{
        swiper.init();
    }

});