$(document).ready(function(){

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    const scrollBottom = document.querySelector(".main__center--bottom");

    const main = document.querySelector(".main");
    
    scrollBottom.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollBy({
            top: main.clientHeight,
            behavior: 'smooth'
        });
    });

});