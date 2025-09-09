$(document).ready(function(){

	const slider = new Swiper(".slider__content", {
        slidesPerView: 3.5,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15
            },
            998: {
                slidesPerView: 3.5,
                spaceBetween: 15
            }
        }
    });

    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    const closeMenu = () => {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    }

    $(".header__menu").on("click", function(){
        $(".mobile__menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".mobile__menu--close").on("click", function(){
        closeMenu();
    });

    // Плавный скролл до элемента
    const scrollToHash = () => {
        if(window.location.hash) {
            var hash = window.location.hash.substring(1);
            var targetElement = $('#' + hash);
            
            if(targetElement.length) {
                $('html, body').animate({
                    scrollTop: targetElement.offset().top
                }, 500);
            }

            setTimeout(() => {
                history.replaceState(null, null, ' ');
            }, 600);
        }
    }

    $(".go").on("click", function(e){
        e.preventDefault();
        const point = $(this).attr("data-point");
        const currentElement = $("#"+point);

        if(!point) return;

        if(!currentElement.length){
            return window.location.href = `#${point}`;
        }
        
        history.replaceState(null, null, `#${point}`);
        closeMenu();
        scrollToHash();
    });

    scrollToHash();

});