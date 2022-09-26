$(document).ready(function(){

	$(".review__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<img src="img/prev.svg" alt="prev" class="review__arrow prev" />',
        nextArrow: '<img src="img/next.svg" alt="next" class="review__arrow next" />'
    });

    let urlVideo = $(".modal__video--content").attr("src");

    $(".main__play--icon").on("click", function(){
        $("body").addClass("scroll");
        $(".modal__video").addClass("active");
        $(".modal__video--content").attr("src", urlVideo);
    });

    $(".modal__video").on("click", function(){
        $("body").removeClass("scroll");
        $(this).removeClass("active");
        $(".modal__video--content").attr("src", "");
    });

    $(".modal__video--content").on("click", function(e){
        e.stopPropagation();
    });

});