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

    // Замена блюда
    $(".swap__item--button").on("click", function(){
        $(".swap__elems").toggleClass("active");
    });

    // Выбор рациона
    $(".complex__item").on("click", function(){
        $(".complex__item").removeClass("active");
        $(".complex__wrp").removeClass("active");

        const complex = $(this).attr("data-complex");

        if(!complex) return;

        $(this).addClass("active");
        $(".complex__wrp[data-complex="+complex+"]").addClass("active");
    });

    // Модалки
    $(".modal__show").on("click", function(e){
        e.preventDefault();

        const modal = $(this).attr("data-modal");

        if(!modal) return;

        $(".modal").removeClass("active");
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

    // Появление корзины
    $(".food__form--choose").on("click", function(){
        $(this).siblings(".food__form--choose").removeClass("active");
        $(this).addClass("active");

        $(".cart").removeClass("active");
        $(".cart[data-cart='balance']").addClass("active");
    });

    // Добавление в корзину
    $(".addto__cart").on("click", function(){
        $(this).addClass("added");

        $(".cart").removeClass("active");
        $(".cart[data-cart='choose']").addClass("active");
    });

    $(".food__minus").on("click", function(){
        const block = $(this).siblings(".food__count");
        let text = block.text();
        let number = parseInt(text, 10);

        if (isNaN(number)) {
            number = 1;
        } else {
            number -= 1;
        }

        if (number <= 1) {
            number = 1;
        }

        block.text(number);
    });

    $(".food__plus").on("click", function(){
        const block = $(this).siblings(".food__count");
        let text = block.text();
        let number = parseInt(text, 10);

        if (isNaN(number)) {
            number = 1;
        } else {
            number += 1;
        }

        if (number > 99) {
            number = 99;
        }

        block.text(number);
    });

    // Переключатель
    $("#allergy_switch").on("click", function(){
        $(this).toggleClass("active");
    });

    $(".orders__item--freeze--switch").on("click", function(){
        $(this).toggleClass("active");
    });

    // Faq
    $(".faq__cat").on("click", function(){
        $(".faq__cat").removeClass("active");
        $(this).addClass("active");

        $(".faq__content").removeClass("active");
        $(".faq__content").eq($(this).index()).addClass("active");
    });

    $(".faq__item").on("click", function(){
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

    // Добавить новый адрес
    $(".add__address").on("click", function(){
        $(this).addClass("hide");
        $(".add__address--form").addClass("active");
        $(".save__address").removeClass("hide");
    });

    $(".save__address").on("click", function(){
        $(this).addClass("hide");
        $(".add__address--form").removeClass("active");
        $(".add__address").removeClass("hide");

        // Доп. логика сохранения адреса..
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