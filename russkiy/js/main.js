$(document).ready(function(){


	$(window).on("scroll resize", function() {
	    var o = $(window).scrollTop() / ($(document).height() - $(window).height());
	    $(".scrollprogress").css({
	        "width": (100 * o | 0) + "%"
	    });
	});

	$('.task__scroll--button').on('click', function(e){
		var point = $(this).text().trim();
	  $('html,body').stop().animate({ scrollTop: $('#point__' + point).offset().top }, 1000);
	  e.preventDefault();
	});


});