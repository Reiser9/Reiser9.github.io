$(document).ready(function () {
    $(".up").on("click", function (e) {
        e.preventDefault();
        $("body, html").animate({ scrollTop: 0 }, 400);
    });

    $(".drop__mobile").on("click", function (e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(this).siblings(".modal__menu--podlinks").toggleClass("active");
    });

    const close = () => {
        $(".menu").removeClass("active");
        $(".menu").attr("src", "img/1/menu.svg");
        $("body").removeClass("scroll");
        $(".modal__menu[data-modal='menu']").removeClass("active");
    };

    $(".menu").on("click", function () {
        if ($(this).hasClass("active")) {
            close();
        } else {
            $(".header__city--inner").removeClass("active");
            $("body").removeClass("scroll3");
            $(".modal__menu").removeClass("active");
            
            $(this).attr("src", "img/1/cross.svg");
            $(this).addClass("active");
            $("body").addClass("scroll");
            $(".modal__menu[data-modal='menu']").addClass("active");
        }
    });

    $(".mn").on("click", function () {
        if ($(this).hasClass("active")) {
            $(".mn").removeClass("active");
            $(".mn").attr("src", "img/1/menu-pk.svg");
            $("body").removeClass("scroll");
            $(".modal__menu[data-modal='menu']").removeClass("active");
        } else {
            $(".header__city--inner").removeClass("active");
            $("body").removeClass("scroll3");
            $(".modal__menu").removeClass("active");

            $(this).attr("src", "img/1/cross.svg");
            $(this).addClass("active");
            $("body").addClass("scroll");
            $(".modal__menu[data-modal='menu']").addClass("active");
        }
    });

    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        $("body").removeClass("scroll");
        $("body").removeClass("scroll2");
        $(".modal__menu").removeClass("active");
        $(".mn").attr("src", "img/1/menu-pk.svg");
        $(".menu").attr("src", "img/1/menu.svg");
        $(".mn").removeClass("active");
        $(".menu").removeClass("active");

        $(this).addClass("active");
        $("body").addClass("scroll3");
        $(".modal__menu[data-modal='citys']").addClass("active");
    });

    $(".modal__cross").on("click", function () {
        $(".header__city--inner").removeClass("active");
        $("body").removeClass("scroll3");
        $(".modal__menu[data-modal='citys']").removeClass("active");
    });

    $(".card__main--img").on("click", function () {
        $("body").addClass("scroll2");
        $(".modal__carousel").addClass("active");
    });

    $(".modal__carousel").on("click", function () {
        $("body").removeClass("scroll2");
        $(".modal__carousel").removeClass("active");
    });

    $(".modal__carousel--inner").on("click", function (e) {
        e.stopPropagation();
    });

    $(".card__main--img--inner").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".main__photo--inner",
    });

    $(".main__photo--inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".card__main--img--inner",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    $(".modal__carousel--content").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
