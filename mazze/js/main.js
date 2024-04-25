$(document).ready(function () {

    // Main text change color
    var $points = $('.main__point');
    var index = 0;

    function toggleActiveClass() {
        $points.removeClass('active');
        $points.eq(index).addClass('active');
        index = (index + 1) % $points.length;
    }

    toggleActiveClass();

    setInterval(toggleActiveClass, 2000);

    // Menu
    $(".header__menu").on("click", function(e){
        e.stopPropagation();
        $(this).toggleClass("active");
        $(".menu__content").toggleClass("active");
    });

    $(document).on("click", function(){
        $(".header__menu").removeClass("active");
        $(".menu__content").removeClass("active");
    });

    $(".menu__content").on("click", function(e){
        e.stopPropagation();
    });

    // FAQ
    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Slider
    $('.road__slider').slick({
		infinite: true,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '8vw',
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
	});

    $(".landing__slider--content").slick({
        infinite: false,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: ".landing__slider--dots",
        centerMode: true,
        centerPadding: '20vw',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    centerPadding: '11vw',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '3vw',
                }
            },
        ]
    });
});

// Noise
document.addEventListener("DOMContentLoaded", function() {
    const canvases = document.querySelectorAll('.noise');

    canvases.forEach(function(canvas) {
        const ctx = canvas.getContext('2d');
        noise(ctx);
    });

    function noise(ctx) {
        const w = ctx.canvas.width,
            h = ctx.canvas.height,
            iData = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(iData.data.buffer),
            len = buffer32.length;
        let i = 0;

        for (; i < len; i++) {
            if (Math.random() < .1) buffer32[i] = 0xffffffff;
        }

        ctx.putImageData(iData, 0, 0);
    }

    (function loop() {
        canvases.forEach(function(canvas) {
            const ctx = canvas.getContext('2d');
            noise(ctx);
        });
        requestAnimationFrame(loop);
    })();
});