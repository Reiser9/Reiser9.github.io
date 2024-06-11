$(document).ready(function(){

	$(".header__menu").on("click", function(){
        $(this).toggleClass("active");
        $(".modal__menu").toggleClass("active");
        $("body").toggleClass("scroll");
        $(".header").toggleClass("fixed");
    });

    $(".go").on("click", function(e){
		e.preventDefault();

        $(".header__menu").removeClass("active");
        $(".modal__menu").removeClass("active");
        $("body").removeClass("scroll");
        $(".header").removeClass("fixed");
        
		let point = $(this).attr("data-point");
		let pointTop = $("#"+point).offset().top;
		$('body,html').animate({scrollTop: pointTop}, 500);
	});

    // Countdown
    var countDownDate = new Date("Jul 11, 2024 12:00").getTime();

    const countdown = () => {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".countdown__day").text(days);
        $(".countdown__hours").text(hours);
        $(".countdown__minute").text(minutes);
        $(".countdown__second").text(seconds);

        if(distance < 0){
            clearInterval(x);
        }
    }

    countdown();

    var x = setInterval(countdown, 1000);

});