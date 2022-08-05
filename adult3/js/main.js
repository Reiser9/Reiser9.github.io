$(document).ready(function(){

	$(".up").on('click', function(e){
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 400);    
    });

    $(".drop__mobile").on("click", function(e){
        e.preventDefault();

        $(this).toggleClass("active");
        $(this).siblings(".modal__menu--podlinks").toggleClass("active");
    });

    const close = () => {
        $(".menu").removeClass("active");
        $(".menu").attr("src", "img/1/menu.svg");
        $("body").removeClass("scroll");
        $(".modal__menu").removeClass("active");
    }

    $(".menu").on("click", function(){
        if($(this).hasClass("active")){
            close();
        }
        else{
            $(this).attr("src", "img/1/cross.svg");
            $(this).addClass("active");
            $("body").addClass("scroll");
            $(".modal__menu").addClass("active");
        }
    });

    $(".mn").on("click", function(){
        if($(this).hasClass("active")){
            $(".mn").removeClass("active");
            $(".mn").attr("src", "img/1/menu-pk.svg");
            $("body").removeClass("scroll");
            $(".modal__menu").removeClass("active");
        }
        else{
            $(this).attr("src", "img/1/cross.svg");
            $(this).addClass("active");
            $("body").addClass("scroll");
            $(".modal__menu").addClass("active");
        }
    });

    $(".card__main--img--inner").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.main__photo--inner'
    });

    $(".main__photo--inner").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.card__main--img--inner',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

});