$(document).ready(function(){

    const closeMenu = () => {
        $(".header__menu").removeClass("active");
        $(".menu__dropdown--bg").removeClass("active");
        $("body").removeClass("scroll");
    }

    $(".main__mouse--icon").on("click", function(e){
        e.preventDefault();

        $('body, html').animate({scrollTop: $(".main").outerHeight()}, 500);
    });

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");

        if(!$("#"+point).length){
            window.location.href = "/";
        }

		closeMenu();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(".questions__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).children(".questions__item--text").slideUp(200);
            $(this).removeClass("active");
        }
        else{
            $(".questions__item").removeClass("active");
            $(this).addClass("active");

            $(".questions__item").children(".questions__item--text").slideUp(200);
            $(this).children(".questions__item--text").slideDown(200);
        }
    });

    $(".header__menu").on("click", function(){
        $(this).toggleClass("active");
        $(".menu__dropdown--bg").toggleClass("active");
        $("body").toggleClass("scroll");

        $('body,html').animate({scrollTop: 0}, 200);
    });

    $('.how__item--preview').on('click', function() {
        var videoId = $(this).attr('data-video-id');
        var iframe = $('<iframe>')
        .attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&enablejsapi=1')
        .attr('allowfullscreen', true)
        .attr('mozallowfullscreen', true)
        .attr('webkitallowfullscreen', true)
        .attr('allow', 'autoplay');
        
        $(this).siblings(".how__iframe").append(iframe);
        $(this).off('click');
        
        $(this).remove();
    });

    // Карусель
    $('.how__content').slick({
		infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
        dots: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img src="img/prev.svg" alt="arrow" class="how__arrow prev" />',
        nextArrow: '<img src="img/next.svg" alt="arrow" class="how__arrow next" />'
	});

    $('.how__arrow').on('click', function() {
        $('.how__iframe iframe').each(function() {
            $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });

    $('.slick-dots li').on('click', function() {
        $('.how__iframe iframe').each(function() {
            $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });

});