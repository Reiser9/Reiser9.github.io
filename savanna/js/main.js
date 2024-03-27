$(document).ready(function(){

    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });
    
    $(".road__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".road__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".go").on("click", function(e){
        e.preventDefault();
        $(".modal__menu").removeClass("active");

        let point = $(this).attr("data-point");
        let pointTop = $("#"+point).offset().top;
        $('body,html').animate({scrollTop: pointTop}, 500);
    });

    // Copy address
    $(".token__address--value").on("click", function(){
        var text = $(this).attr("data-text");
        var input = $('<textarea>').val(text).appendTo('body').select();
        document.execCommand('copy');
        input.remove();
        alert("Success copied!");
    });

    // Mobile menu
    $(".header__menu").on("click", function(){
        $(".modal__menu").addClass("active");
    });

    $(".modal__menu").on("click", function(){
        $(this).removeClass("active");
    });

    $(".modal__menu--content").on("click", function(e){
        e.stopPropagation();
    });

	// Carousel
    $('.carousel__inner').slick({
		infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '8vw',
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
	});

});