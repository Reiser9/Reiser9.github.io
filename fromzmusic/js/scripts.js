$(document).ready(function () {



    $('.slider_banner').owlCarousel({
        items: 1,
        nav: true,
        navText: [$('.prev'), $('.next')],
    });

    /* Появление мобильного меню */ 

    $(".mob__bottom--menu .fa-bars").on("click", function(){
        $(".menu__click").removeClass("menu__transform");
    });

    $(".close__menu").on("click", function(){
        $(".menu__click").addClass("menu__transform");
    });


    $(".catalog__item").on("click", function(){
        $(".catalog__menu").removeClass("menu__transform");
    });

    $(".close__menu--catalog").on("click", function(){
        $(".catalog__menu").addClass("menu__transform");
    });

    /* Появление поиска при клике на кнопку поиск в мобильной версии */ 

    $(".search__mob .fa-search").parent(".search__mob").on("click", function(){
        $(".mob__bottom--menu").fadeOut(0);
        $(".mobile__menu--search--input--inner").slideDown(200);
    });

    $(".content_section").on("click", function(){
        $(".mobile__menu--search--input--inner").fadeOut(0);
        $(".mob__bottom--menu").slideDown(200);
    });

    /* Кнопка выбрать все */

    $(".choose__all").on("click", function(){
        // $(this).siblings(".selects__inner")
        $(this).siblings(".selects__inner").children(".choose__item").children("input[type=checkbox]").each(function() { 
            this.checked = true;
        });
    });

    /* Кнопки переключения физ лица и юр лица */ 

    $(".fizface").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".fiz").fadeIn(0);
    });

    $(".yurface").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".yur").fadeIn(0);
    });

    $(".datal").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".data").fadeIn(0);
    });

    $(".historyl").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".history").fadeIn(0);
    });

    $(".likel").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".like").fadeIn(0);
    });

    $(".tovarl").on("click", function(){
        $(".reg__face--tab").fadeOut(0);
        $(".tovar").fadeIn(0);
    });



    $(".cart__inner--link").on("click", function(){
        $(".cart__face--tab").fadeOut(0);
        $(".cart__inner").fadeIn(0);
    });

    $(".cart__design--link").on("click", function(){
        $(".cart__face--tab").fadeOut(0);
        $(".cart__design").fadeIn(0);
    });

    $(".cart__accept--link").on("click", function(){
        $(".cart__face--tab").fadeOut(0);
        $(".cart__accept").fadeIn(0);
    });


    /* Кнопка оформить заказ */ 

    $(".oform__button").on("click", function(){
        $(".cart__inner--oform").fadeIn(0);
        $(".cart__buttons").fadeOut(0);
    });

    /* Кнопка сброса */

    $(".reset__btn").on("click", function(){
        $(this).parents(".reset__btns").siblings(".selection__content").children(".select__box").children(".selects__inner").children(".choose__item").children("input[type=checkbox]").each(function() { 
            this.checked = false;
        });
    });

    /* Переключение оплаты */ 

    $(".cart__inner--checkboxes").on("click", function(){
        if($("#var2").is(":checked")){
            $(".option__payment").fadeOut(0);
            $(".region__delivery").fadeIn(0);
        }
        else{
            $(".option__payment").fadeIn(0);
            $(".region__delivery").fadeOut(0);
        }

        if($("#payment2").is(":checked")){
            $(".curer__text").fadeOut(0);
            $(".partners__payment").fadeIn(0);
        }
        else{
            $(".curer__text").fadeIn(0);
            $(".partners__payment").fadeOut(0);
        }
    });

    /* Переключение технического каталога */

    var catalogLink = $(".tex-catalog__views--link");

    catalogLink.on("click", function(){

        $(".tex-catalog__views--link").removeClass("active__view");
        $(this).addClass("active__view");

        $(".tex__inner").fadeOut(0);
        $(".tex__title").fadeOut(0);

        if($(this).hasClass("cable__link")){
            $(".cable__inner").fadeIn(0);
            $(".cable__title").fadeIn(0);
        }
        else if($(this).hasClass("itk__link")){
            $(".iek-catalog__inner").fadeIn(0);
            $(".iek__title").fadeIn(0);
        }
        else if($(this).hasClass("tdm__link")){
            $(".itk-catalog__inner").fadeIn(0);
            $(".itk__title").fadeIn(0);
        }
        else if($(this).hasClass("iek__link")){
            $(".tex-catalog__inner").fadeIn(0);
            $(".cat__title").fadeIn(0);
        }
        else if($(this).hasClass("all__link")){
            $(".tex__inner").fadeIn(0);
            $(".tex__title").fadeIn(0);
        }
    });

    /* Конец переключателей технического каталога */ 

    let brands = $('.brands_slider');

    let popular = $('.popular_slider');

    let newprod = $('.new_slider');

    let stockslider = $('.stock_slider');

    let officeslider = $(".office__slider");

    let officeslider2 = $(".office__slider2");

    officeslider.owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        responsive:{
            1750:{
                items:3
            },
            970:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });

    officeslider2.owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        responsive:{
            1600:{
                items:3
            },
            970:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });

    brands.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        responsive:{
            1600:{
                items:4
            },
            1601:{
                items:3
            },
            1440:{
                items:4
            },
            1280:{
                items:4
            },
            1024:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });
    popular.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        responsive:{
            1700:{
                items:4
            },
            1601:{
                items:3
            },
            1440:{
                items:4
            },
            1280:{
                items:4
            },
            1024:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });
    newprod.owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        responsive:{
            1700:{
                items:4
            },
            1601:{
                items:3
            },
            1440:{
                items:4
            },
            1280:{
                items:4
            },
            1024:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });
    stockslider.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        responsive:{
            1700:{
                items:4
            },
            1601:{
                items:3
            },
            1440:{
                items:4
            },
            1280:{
                items:4
            },
            1024:{
                items:3
            },
            768:{
                items:2
            },
            420:{
                items:1
            },
            0:{
                items:1
            }
        }
    });
    $('.brands_navs .next_arr').click(function () {
        brands.trigger('next.owl.carousel');
    });
    $('.brands_navs .prev_arr').click(function () {
        brands.trigger('prev.owl.carousel');
    });
    $('.popular .next_arr').click(function () {
        popular.trigger('next.owl.carousel');
    });
    $('.popular .prev_arr').click(function () {
        popular.trigger('prev.owl.carousel');
    });

    $('.new .next_arr').click(function () {
        newprod.trigger('next.owl.carousel');
    });
    $('.new .prev_arr').click(function () {
        newprod.trigger('prev.owl.carousel');
    });


    $('.new .next_arr').click(function () {
        officeslider.trigger('next.owl.carousel');
    });
    $('.new .prev_arr').click(function () {
        officeslider.trigger('prev.owl.carousel');
    });

    $('.new .next_arr').click(function () {
        officeslider2.trigger('next.owl.carousel');
    });
    $('.new .prev_arr').click(function () {
        officeslider2.trigger('prev.owl.carousel');
    });


    $('.stock .next_arr').click(function () {
        stockslider.trigger('next.owl.carousel');
    });
    $('.stock .prev_arr').click(function () {
        stockslider.trigger('prev.owl.carousel');
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('#num').niceSelect();

    // $('.views').click(function (e) {
    //     e.preventDefault();
    //     if (!$(this).is('.active')) {
    //         $('.views').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });
    
    /*      RANGE      */
    
    $('.upper').on('input', setFill);
	$('.lower').on('input', setFill);

	var max = $('.upper').attr('max');
	var min = $('.lower').attr('min');

	function setFill(evt) {
		var valUpper = $('.upper').val();
		var valLower = $('.lower').val();
		if (parseFloat(valLower) > parseFloat(valUpper)) {
			var trade = valLower;
			valLower = valUpper;
			valUpper = trade;
		}
		
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		$('.fill').css('left', 'calc(' + left + '%)');
		$('.fill').css('width', width - left + '%');
	}
    
    setFill();
});