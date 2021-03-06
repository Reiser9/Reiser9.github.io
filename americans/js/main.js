$(document).ready(function(){

	$(".our__stats--point--text--show").on("click", function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".our__stats--point--text--wrapper").removeClass("active");
			$(this).children(".our__see").text("See more");
		}
		else{
			$(this).addClass("active");
			$(".our__stats--point--text--wrapper").addClass("active");
			$(this).children(".our__see").text("See less");
		}
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
		if($(window).width() > 998){
			close();
		}
	});

	$(".faq__item--open").on("click", function(){
        $(this).toggleClass("active");

        $(this).siblings(".faq__item--text--inner").children(".faq__item--text").slideToggle(200);
        
        if($(this).hasClass("active")){
            $(this).text("-")
        }
        else{
            $(this).text("+")
        }
    });

    $(".go").on("click", function(e){
        e.preventDefault();
        close();

        let point = $(this).attr("data-point");
        let pointTop = $("#"+point).offset().top;
        $('body,html').animate({scrollTop: pointTop}, 500);
    });

    const rotate = () => {
		let scroll = $(".road__content").offset().top;
        let sc = $(window).scrollTop();
        let heightBlock = $(".road__content").height();

		if(sc - scroll > -320 && sc - scroll <= heightBlock - 320){
			if($(window).width() <= 768){
				$(".road__heart").css("transform", "translateX(0) translateY("+(sc - scroll + 300)+"px)");
			}
			else{
				$(".road__heart").css("transform", "translateX(-50%) translateY("+(sc - scroll + 300)+"px)");
			}
		}
	}

	rotate();
	$(document).scroll(function(){
		rotate();
	});

    $(".nft__carousel").slick({
        infinite: true,
        slidesToShow: 9,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '120px',
        speed: 200,
        mobileFirst: true,
        responsive: [
            {
		        breakpoint: 0,
		        settings: {
			        slidesToShow: 2,
                    centerPadding: '50px',
		        }
		    },
            {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 5
		        }
		    },
		    {
		        breakpoint: 1200,
		        settings: {
			        slidesToShow: 9
		        }
		    }
		]
    });

    $(".utils__carousel").slick({
        infinite: false,
        slidesToShow: 2,
        dots: false,
        speed: 200,
        mobileFirst: true,
        adaptiveHeight: true,
        appendArrows: '.carousel__arrows',
        nextArrow: '<div class="arrow next__arrow"><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8125 21.1272L23.6786 11.2611V9.86607L13.8125 0L12.4174 1.39506L20.5984 9.57798H0V11.5512H20.6004L12.4155 19.7321L13.8105 21.1272H13.8125Z" fill="#FFF8DC"/></svg></div>',
        prevArrow: '<div class="arrow prev__arrow"><svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2422 21.3069L0.376116 11.4408V10.0458L10.2422 0.179688L11.6372 1.57475L3.4563 9.75767H24.0547V11.7309H3.45433L11.6392 19.9118L10.2442 21.3069H10.2422Z" fill="#FFF8DC"/></svg></div>',
        responsive: [
            {
		        breakpoint: 0,
		        settings: {
			        slidesToShow: 1
		        }
		    },
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 2
		        }
		    }
		]
    });

});