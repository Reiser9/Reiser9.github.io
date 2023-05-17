$(document).ready(function(){

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
        
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    const first = document.querySelector(".first__text");
    const second = document.querySelector(".second__text");
    const fird = document.querySelector(".fird__text");
    
    const about = document.querySelector(".about");
    const scrollBottom = document.querySelector(".main__center--bottom");

    const main = document.querySelector(".main");
    const poke = document.querySelector(".poke__content");
    const tax = document.querySelector(".tax__mobile");
    

    scrollBottom.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollBy({
            top: main.clientHeight,
            behavior: 'smooth'
        });
    });

    // function checkAnimation() {
    //     if(window.scrollY > poke.clientHeight + tax.clientHeight + (main.clientHeight / 2)){
    //         document.body.classList.add("overlay");
    //     }
    //     else{
    //         document.body.classList.remove("overlay");
    //     }
    // }

    // checkAnimation();

	document.addEventListener("scroll", function(){
        const windowScroll = window.scrollY;
        const aboutScroll = about.offsetTop;

        // Main animation
        // checkAnimation();
        
        // Text about
        if(windowScroll - aboutScroll < 0 && windowScroll - aboutScroll > -100){
            first.classList.add("active");
            second.classList.remove("active");
            fird.classList.remove("active");
        }
        else if(windowScroll - aboutScroll >= 0 && windowScroll - aboutScroll <= 150){
            second.classList.add("active");
            first.classList.remove("active");
            fird.classList.remove("active");
        }
        else if(windowScroll - aboutScroll >= 150 && windowScroll - aboutScroll <= 250){
            fird.classList.add("active");
            second.classList.remove("active");
            first.classList.remove("active");
        }
        else{
            fird.classList.remove("active");
            second.classList.remove("active");
            first.classList.remove("active");
        }
    });

});