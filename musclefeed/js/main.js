$(document).ready(function(){

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");

		$('body, html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(".reviews__item--text--full").on("click", function(){
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(this).siblings(".reviews__item--text").addClass("active");
            $(this).text("Свернуть");
        }
        else{
            $(this).siblings(".reviews__item--text").removeClass("active");
            $(this).text("Смотреть весь отзыв");
        }
    });

    // Мобильное меню
    $(".menu__button").on("click", function(){
        $(".menu__mobile").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".menu__mobile--link").on("click", function(e){
        e.preventDefault();

        $(this).siblings(".menu__mobile--dropdown").toggleClass("active");
        $(this).toggleClass("active");
    });

    // Модалки
    $(".modal__show").on("click", function(e){
        e.preventDefault();

        const modal = $(this).attr("data-modal");

        if(!modal) return;

        $("body").addClass("scroll2");
        $(".modal[data-modal="+modal+"]").addClass("active");
    });

    $(".modal__close").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    });

    $(".modal").on("click", function(){
        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
    });

    $(".modal__content").on("click", function(e){
        e.stopPropagation();
    });

    // Календарь
    $(".modal__calendar").MEC({
        from_monday: true,
    });

    const getDateFromString = (day, monthYear) => {
        const fullDateString = `${monthYear} ${day}`;
        const date = new Date(fullDateString);

        if (!isNaN(date)) {
            return date;
        }

        throw new Error('Invalid date string');
    }

    $(".modal__calendar").on("click", ".a-date:not(.blurred)", function(){
        const day = $(this).text();
        const year = $("#monthYear").text();
        const date = getDateFromString(day, year); // Выбранная дата
    });

    const disabledDates = ['2025-03-15', '2025-04-01', '2025-04-15']; // Даты, которые не будут активны

    const isDateDisabled = (day, monthYear) => {
        const fullDate = new Date(`${monthYear} ${day}`);

        if (!isNaN(fullDate)) {
            const dateString = `${fullDate.getFullYear()}-${String(fullDate.getMonth() + 1).padStart(2, '0')}-${String(fullDate.getDate()).padStart(2, '0')}`;
            return disabledDates.includes(dateString);
        }

        return false;
    }

    const observer = new MutationObserver(() => {
        $('.a-date').each(function () {
            const day = $(this).text();
            const monthYear = $("#monthYear").text();
    
            if (day && monthYear && isDateDisabled(day, monthYear)) {
                $(this).addClass('blurred');
            }
        });
    });

    const calendar = document.querySelector('.modal__calendar');
    
    if(calendar){
        observer.observe(calendar, {
            childList: true,
            subtree: true
        });
    }

    // Появление корзины
    $(".food__form--choose").on("click", function(){
        $(this).siblings(".food__form--choose").removeClass("active");
        $(this).addClass("active");

        $(".cart").addClass("active");
    });

    // Переключатель
    $("#allergy_switch").on("click", function(){
        $(this).toggleClass("active");
    });

    // Оформление заказа
    $(".order1step").on("click", function(){
        const hasAllergy = $("#allergy_switch").hasClass("active");

        $(".modal").removeClass("active");

        if(hasAllergy){
            $(".modal[data-modal='order2']").addClass("active");
        }
        else{
            $(".modal[data-modal='order3']").addClass("active");
        }
    });

    $(".order2step").on("click", function(){
        $(".modal").removeClass("active");
        $(".modal[data-modal='order3']").addClass("active");
    });

    // Слайдеры
    const team = new Swiper(".team__content", {
        slidesPerView: 5,
        spaceBetween: 24,
        navigation: {
            prevEl: ".team__prev",
            nextEl: ".team__next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            1065: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1270: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1630: {
                slidesPerView: 5,
                spaceBetween: 24
            }
        },
    });

    const food = new Swiper(".food__content", {
        slidesPerView: 5,
        navigation: {
            prevEl: ".food__prev",
            nextEl: ".food__next"
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2,
            },
            1065: {
                slidesPerView: 3,
            },
            1270: {
                slidesPerView: 4,
            },
            1630: {
                slidesPerView: 5,
            }
        },
    });

    const complex = new Swiper(".complex__slider", {
        slidesPerView: 3,
        spaceBetween: 24,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            480: {
                slidesPerView: 1.1,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1065: {
                slidesPerView: 2,
            },
            1270: {
                slidesPerView: 2.5,
            },
            1630: {
                slidesPerView: 3,
            }
        },
    });

});