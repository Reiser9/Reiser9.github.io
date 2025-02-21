$(document).ready(function(){

    // Появление корзины
    const chooseButtonInForm = (element) => {
        element.siblings(".food__form--choose").removeClass("active");
        element.addClass("active");

        const value = element.attr("data-value");
        const highlightValue = element.attr("data-highlight");
        const subvalue = element.attr("data-subvalue");
        const type = element.parent(".food__form--item--content").attr("data-value");

        $(".order__value[data-order="+type+"]").text(value);
        $(".order__highlight[data-highlight="+type+"]").text(highlightValue || "");
        $(".order__subvalue[data-subvalue="+type+"]").text(subvalue || "");

        $(".cart").removeClass("active");
        $(".cart[data-cart='balance']").addClass("active");
    }

    $(".food__form--choose").on("click", function(){
        chooseButtonInForm($(this));
    });

    const price = $(".order__price").text();
    $(".cart__price--value").text(price);

    // Калькулятор расчета калорий
    const calculateCalories = () => {
        let birthYear = parseInt($(".calc__birthYear").val());
        let height = parseInt($(".calc__height").val());
        let weight = parseInt($(".calc__weight").val());
        let gender = $(".calc__form--item--button.active[data-form='gender']").attr("data-value");
        let activity = parseFloat($(".calc__form--item--button.active[data-form='activity']").attr("data-value"));
        let target = parseFloat($(".calc__form--item--button.active[data-form='target']").attr("data-value"));
        var currentYear = new Date().getFullYear();

        if(!birthYear || !height || !weight || !activity || !gender || !target) return $(".calc__result--value").text("-");

        let base = 9.99 * weight + 6.25 * height - 4.92 * (currentYear - birthYear);

        if(gender === "male"){
            base += 5;
        }
        else if(gender === "female"){
            base -= 161;
        }

        base = (base * activity * target).toFixed(0);

        $(".calc__result--value").text(base);
    }

    $(".calc__birthYear").on("input", function(){
        birthYear = $(this).val();
        calculateCalories();
    });

    $(".calc__height").on("input", function(){
        height = $(this).val();
        calculateCalories();
    });

    $(".calc__weight").on("input", function(){
        weight = $(this).val();
        calculateCalories();
    });

    $(".calc__form--item--button").on("click", function(){
        $(this).parent(".calc__form--item--content").children(".calc__form--item--button").removeClass("active");
        $(this).addClass("active");

        calculateCalories();
    });

    $(".calc__confirm").on("click", function(){
        const resultValue = $(".calc__result--value").text();
        const result = resultValue !== "-" ? parseInt(resultValue) : "";

        if(!result) return;

        const buttons = $('.food__calories');

        const values = buttons.map(function() {
            return parseFloat($(this).data('value').toString().replace(/\s/g, ''));
        }).get();

        const closestValue = values.reduce((prev, curr) => Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev);

        buttons.each(function() {
            const value = parseFloat($(this).data('value').toString().replace(/\s/g, ''));
            $(this).removeClass('active');
            if (value === closestValue) {
                chooseButtonInForm($(this));
            }
        });

        $("body").removeClass("scroll2");
        $(".modal").removeClass("active");
        
    });

});