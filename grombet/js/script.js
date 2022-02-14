$(document).ready(function() {
    $(".tabs-titles .tab-title").click(function() { 
		if (!$(this).hasClass("active")) { 
			var i = $(this).index(); 
			$(".tabs-titles .tab-title.active").removeClass("active");
			$(".tabs-content .tab-content.active").hide().removeClass("active"); 
			$(this).addClass("active"); 
			$($(".tabs-content .container").children(".tab-content")[i]).fadeIn(0).addClass("active"); 
		}
    });
    $(".modal-prediction .tabs-title .tab-title").click(function() { 
		if (!$(this).hasClass("active")) { 
			var i = $(this).index(); 
			$(".modal-prediction .tabs-title .tab-title.active").removeClass("active");
			$(".modal-prediction .tabs-content-model .tab-content.active").hide().removeClass("active"); 
			$(this).addClass("active"); 
			$($(".modal-prediction .tabs-content-model").children(".tab-content")[i]).fadeIn(0).addClass("active"); 
		}
    });
    $('.modal-window .close').click(function() {
        $('.modal-window').fadeOut();
    })

    $('.prediction-buy .prediction-buy-content .prediction-btn').click(function(e) {
        e.preventDefault();
        $('.modal-prediction').fadeIn();
    })
})