let swiperInstance;

const initOrDestroySwiper = () => {
    const screenWidth = $(window).width();

    if (screenWidth > 480) {
        if (!swiperInstance) {
            swiperInstance = new Swiper(".services__content", {
                slidesPerView: 4.5,
                spaceBetween: 10,
                breakpoints: {
                    480: {
                        slidesPerView: 1.75,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    998: {
                        slidesPerView: 3.5,
                    },
                    1200: {
                        slidesPerView: 4.5,
                        spaceBetween: 10,
                    },
                },
            });
        }
    } else {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
};

$(document).ready(function () {
    initOrDestroySwiper();

    $(window).resize(function () {
        initOrDestroySwiper();
    });

    const close = () => {
        $(".mobile__menu").removeClass("active");
        $("body").removeClass("scroll");
    }

    $(".menu__button").on("click", function(){
        $(".mobile__menu").addClass("active");
        $("body").addClass("scroll");
    });

    $(".mobile__menu--close").on("click", function(){
        close();
    });

    $(".go").on("click", function (e) {
        e.preventDefault();
        close();

        let point = $(this).attr("data-point");
        let pointTop = $("#" + point).offset().top;
        $("body,html").animate({ scrollTop: pointTop }, 500);
    });

    // Sliders
    const gallery = new Swiper(".about__gallery", {
        slidesPerView: 2.5,
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 5,
            },
            998: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        },
    });

    // Форма обратной связи
    $(".contact__form--button").on("click", function(e){
        e.preventDefault();

        const phone = $(".form__phone").val().trim();
        const name = $(".form__name").val().trim();
        const question = $(".form__question").val().trim();

        if(!phone){
            return alert("Телефон должен быть заполнен");
        }
        else if(!name){
            return alert("Имя должно быть заполнено");
        }
        else if(!question){
            return alert("Поле вопроса должно быть заполнено");
        }

        $.ajax({
            url: "/mail.php",
            type: "POST",
            data: {
                phone,
                name,
                question
            },
            beforeSend: () => {
                $(this).addClass("disabled");
            },
            success: function (res) {
                if(res === "Error"){
                    return alert("Возникла ошибка при отправке заявки, попробуйте позже");
                }

                alert("Ваша заявка успешно отправлена!");
                $(".form__phone").val("");
                $(".form__name").val("");
                $(".form__question").val("");
            },
            complete: () => {
                $(this).removeClass("disabled");
            }
        });
    });

});
