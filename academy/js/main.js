$(document).ready(function(){

    const close = () => {
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
        $(".cross").removeClass("active");
        $(".menu").addClass("active");
    }

    $(".menu").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__menu").addClass("active");
        $(this).removeClass("active");
        $(".cross").addClass("active");
    });

    $(".cross").on("click", function(){
        close();
    });

    $(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

    $(".tenders__tab").on("click", function(){
        $(".tenders__tab").removeClass("active");
        $(this).addClass("active");
        $(".tenders__content").removeClass("active");
        $(".tenders__content[data-tab="+$(this).attr("data-tab")+"]").addClass("active");
    });

    $(".go").on('click', function(e){
		e.preventDefault();
		close();
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop - 70}, 500);
	});

	$(".result__carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<img src="img/prev.svg" alt="стрелка" class="arrow arrow__prev">',
	    		  '<img src="img/next.svg" alt="стрелка" class="arrow arrow__next">'],
        loop: true,
        margin: 30
    });

    $(".teachers__carousel").owlCarousel({
        items: 3,
        center: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
	            items: 1,
                autoHeight: true
	        },
	        768:{
	            items:2
	        },
	        1200:{
	            items:3
	        }
        }
    });

});