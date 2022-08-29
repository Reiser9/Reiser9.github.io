$(document).ready(function(){

	const scroll = () => {
        if($(window).scrollTop() > 20){
            $("header").addClass("down");
        }
        else{
            $("header").removeClass("down");
        }
    }

    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    scroll();
    $(window).scroll(function(){
        scroll();
    });

    $(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
    });

    $(".cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

    $(".filters__hidden").on("click", function(){
        $(".category__filters").addClass("active");
    });

    $(".filter__cross").on("click", function(){
        $(".category__filters").removeClass("active");
    });

    $(".content__block--wrap").each(function () {
        var slider = $(this);
    
        slider.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            speed: 200,
            centerPadding: '0px',
            prevArrow: slider.parent().find('.prev'),
            nextArrow: slider.parent().find('.next'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 998,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 2
                    }
                },
            ]
        });
    });

    $(".content__block--content").each(function () {
        var slider = $(this);
    
        slider.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: true,
            speed: 200,
            centerPadding: '0px',
            prevArrow: slider.parent().find('.prev'),
            nextArrow: slider.parent().find('.next'),
            responsive: [
                {
                    breakpoint: 1421,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 998,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 2
                    }
                },
            ]
        });
    });

});