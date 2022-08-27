$(document).ready(function(){

	const scroll = () => {
        if($(window).scrollTop() > 20){
            $("header").addClass("down");
        }
        else{
            $("header").removeClass("down");
        }
    }

    $(window).scroll(function(){
        scroll();
    });

});