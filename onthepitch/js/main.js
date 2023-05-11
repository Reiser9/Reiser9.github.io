$(document).ready(function(){

    // Menu mobile
    function close(){
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("active");
	}

    $(".menu").on("click", function(e){
        e.preventDefault();

        $("body").addClass("scroll");
        $(".mobile__menu").addClass("active");
    });

    $(".cross").on("click", function(e){
        e.preventDefault();

        close();
    });

    $(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

	// Faq
    $(".faq__item--question").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings(".faq__item--answer").removeClass("active");
        }
        else{
            $(".faq__item--question").removeClass("active");
            $(".faq__item--answer").removeClass("active");

            $(this).addClass("active");
            $(this).siblings(".faq__item--answer").addClass("active");
        }
    });

    // Points
    $(".go").on("click", function(e){
		e.preventDefault();

        close();
		let point = $(this).attr("data-point");
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    // Ticker
    const rotate = () => {
		let scroll = $(".ticker__content").scrollTop();
		let winScroll = $(window).scrollTop();
		scroll = winScroll - (scroll + 1400);
		$(".ticker__content").css("transform", "translateX("+scroll/4+"px)");
	}

	rotate();

	$(document).scroll(function(){
		rotate();
	});

    // Countdown
    const deadline = new Date(2023, 05, 11);
    
    let timerId = null;
    
    function countdownTimer() {
        const diff = deadline - new Date();

        if (diff <= 0) {
            clearInterval(timerId);
        }

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    }

    const $days = document.querySelector('.day');
    const $hours = document.querySelector('.hours');
    const $minutes = document.querySelector('.minute');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);

    // Road map scroll
    const road = document.querySelector(".road");
    const roadWrap = document.querySelector(".road__wrap");
    const roadContent = document.querySelector(".road__content");
    const ball = document.querySelector(".road__goal--ball");

    let flag = false;

    const roadRotate = () => {
        const roadWidth = roadContent.clientWidth;
        
        const roadScrollTop = road.offsetTop;
        const windowScroll = window.scrollY;
        const windowWidth = window.outerWidth;

        road.setAttribute("style", `min-height: ${(roadWidth - windowWidth / 2) + roadWrap.clientHeight}px`);

        if(roadScrollTop - windowScroll <= 0){
            if((roadWidth - windowWidth / 2) > Math.abs(roadScrollTop - windowScroll)){
                if(!flag){
                    flag = true;
                }
                
                let turn = Math.abs(roadScrollTop - windowScroll);

                roadWrap.scrollLeft = turn;
                ball.setAttribute("style", `transform: translateY(-50%) translateX(${turn}px)`);
            }
        }
        else{
            if(flag){
                flag = false;
                roadWrap.scrollLeft = 0;
            }
        }
    }

    roadRotate();

    document.addEventListener("scroll", roadRotate);

});