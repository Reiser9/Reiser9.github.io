$(document).ready(function(){

    const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}
    
    const closeModal = () => {
    	$("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    }

	$(".go").on("click", function(e){
        e.preventDefault();
        close();

        let point = $(this).attr("data-point");
        let pointTop = $("#"+point).offset().top;
        $('body, html').animate({scrollTop: pointTop}, 500);
    });

    $(".docs__img").on("click", function(){
        $(".modaler__img").attr("src", $(this).attr("src"));
        $("body").addClass("scroll3");
        $(".modaler").addClass("active");
    });

    $(".modaler").on("click", function(){
        $("body").removeClass("scroll3");
        $(this).removeClass("active");
    });
	
    // Открытие модального окна
    $(".modal__open").on("click", function(e){
        e.preventDefault();
		
        const modal = $(this).attr("data-modal");
        
        $("body").addClass("scroll2");
        $(".modal[data-modal="+modal+"]").addClass("active");
        close();
    });

    $(".modal").on("click", function(){
        closeModal();
    });

    $(".modal__content").on("click", function(e){
        e.stopPropagation();
    });

    $(".mobile__tab").on("click", function(){
        $(this).children(".contact__item--icon").toggleClass("active");
        $(this).siblings(".mobile__tab--content").toggleClass("active");
    });

    $(".tab").on("click", function(e){
        e.preventDefault();

        $(this).siblings(".tab").removeClass("active");
        $(this).parent(".tabs").siblings(".tab__tab").children(".tab__content").removeClass("active");

        let tab = $(this).attr("data-tab");

        $(this).addClass("active");
        $(".tab__content[data-tab="+tab+"]").addClass("active");

        if($(this).hasClass("carsh__tab")){
            $(".car__tab").removeClass("active");
            $(".car__tab[data-tab='car__car_2']").addClass("active");
            $(".tab__content[data-tab='car__car_1']").removeClass("active");
            $(".tab__content[data-tab='car__car_3']").removeClass("active");
            $(".tab__content[data-tab='car__car_4']").removeClass("active");
            $(".tab__content[data-tab='car__car_5']").removeClass("active");
            $(".tab__content[data-tab='car__car_6']").removeClass("active");
            $(".tab__content[data-tab='car__car_2']").addClass("active");
        }
    });
    
    $(".tab__azs").on("click", function(e){
        e.preventDefault();

        $(this).siblings(".tab").removeClass("active");
        $(".azs__tab--content").removeClass("active");

        let tab = $(this).attr("data-tab");

        $(this).addClass("active");
        $(".azs__tab--content[data-tab="+tab+"]").addClass("active");
    });

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on("click", function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

    $(".spoiler").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".spoiler").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".gbo__carousel").slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "27dvw",
        asNavFor: ".gbo__carousel2",
        prevArrow: '<div class="gbo__carousel--arrow"><img src="img/prev.svg" alt="arrow" /></div>',
        nextArrow: '<div class="gbo__carousel--arrow"><img src="img/next.svg" alt="arrow" /></div>',
        appendArrows: ".gbo__carousel--arrows",
        infinite: false,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    centerPadding: "23dvw",
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: "20dvw",
                }
            },
            {
                breakpoint: 998,
                settings: {
                    centerPadding: "10dvw",
                }
            },
        ]
    });

    $(".gbo__carousel2").slick({
        slidesToShow: 1,
        asNavFor: ".gbo__carousel",
        fade: true,
        infinite: false,
        cssEase: 'linear',
        arrows: false
    });
});