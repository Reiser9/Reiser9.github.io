$(document).ready(function(){

    const first = document.querySelector(".first__text");
    const second = document.querySelector(".second__text");
    const fird = document.querySelector(".fird__text");
    
    const about = document.querySelector(".about");
    const scrollBottom = document.querySelector(".main__center--bottom");

    const overlay = document.querySelector(".main__overlay");

    const main = document.querySelector(".main");
    const poke = document.querySelector(".poke__content");
    const tax = document.querySelector(".tax__mobile");
    

    scrollBottom.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollBy({
            top: window.innerHeight * 1.8,
            behavior: 'smooth'
        });
    });

    function checkAnimation() {
        if(window.scrollY > poke.clientHeight + tax.clientHeight + (main.clientHeight / 2)){
            document.body.classList.add("overlay");
        }
        else{
            document.body.classList.remove("overlay");
        }
    }

    checkAnimation();

	document.addEventListener("scroll", function(){
        const windowScroll = window.scrollY;
        const aboutScroll = about.offsetTop;

        // Main animation
        checkAnimation();
        
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