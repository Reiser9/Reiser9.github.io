$(document).ready(function(){

    var interval = setInterval(function() {
        var logo = document.querySelector('.main__bg').shadowRoot.querySelector('a#logo');
        
        if (logo) {
            logo.remove();
            clearInterval(interval);
        }
    }, 100);

    const close = () => {
        $(".header__menu").removeClass("active");
        $(".header").removeClass("active");
        $(".mobile__menu").removeClass("active");
    }

    $(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

    $(".up__button").on("click", function (e) {
        e.preventDefault();
        $("body, html").animate({ scrollTop: 0 }, 400);
    });

    $(".header__menu").on("click", function(){
        $(this).toggleClass("active");
        $(".header").toggleClass("active");
        $(".mobile__menu").toggleClass("active");
    });

    $(".parspective__tab").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".parspective__tab").removeClass("active");
            $(this).addClass("active");
            const data = $(this).attr("data-content");
            $(".perspective__content").removeClass("active");
            $(".perspective__content[data-content="+data+"]").addClass("active");
        }
    });

    // Token scroll
    const token = document.querySelector(".token");
    const tokenWrap = document.querySelector(".token__wrap");
    const tokenContent = document.querySelector(".token__content");
    const other = document.querySelector(".token__container");

    const whyRotate = () => {
        const tokenWidth = tokenContent.clientWidth;
        const otherWidth = other.clientHeight;
        
        const tokenScrollTop = token.offsetTop;
        const windowScroll = window.scrollY;
        const windowWidth = window.outerWidth;

        token.setAttribute("style", `min-height: ${tokenWidth - (windowWidth / 2) + otherWidth}px`);

        if(tokenScrollTop - windowScroll <= 0){
            if(tokenWidth - (windowWidth / 2) > Math.abs(tokenScrollTop - windowScroll)){
                let turn = Math.abs(tokenScrollTop - windowScroll);

                tokenWrap.scrollLeft = turn;
            }
            else{
                tokenWrap.scrollLeft = tokenWidth;
            }
        }
        else{
            token.scrollLeft = 0;
        }
    }

    if(token){
        whyRotate();

        document.addEventListener("scroll", whyRotate);
    }

});