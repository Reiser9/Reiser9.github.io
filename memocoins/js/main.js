$(document).ready(function(){

    const close = () => {
        $(".header__menu").removeClass("active");
    }

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        
        close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    $(".menu").on("click", function(e){
        $(".header__menu").toggleClass("active");
    });

    var countDownDate = new Date("Oct 14, 2023 12:00").getTime();

    const countdown = () => {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : " + minutes + "m";

        if(distance < 0){
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }

    countdown();

    var x = setInterval(countdown, 1000);

});