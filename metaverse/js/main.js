$(document).ready(function(){

	function close(){
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
		$(".header").removeClass("active");
		$(".close").removeClass("active");
		$(".menu").addClass("active");
	}

	$('.how__wallet').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('.wallet').text()).select();
		document.execCommand("copy");
		$temp.remove();
	});

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

	$(".menu").on("click", function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
		$(".header").addClass("active");
		$(".menu").removeClass("active");
		$(".close").addClass("active");
	});

	$(".close").on("click", function(){
		close();
	});

	const ofset = 350;
	const content = $(".road__content");
	$(document).scroll(function(){
		let temp = content.offset().top;
		let heightBlock = content.height();
		let items = $(".road__item--wrapper");
		let winScroll = $(window).scrollTop();

		for(let i = 0; i < items.length; i++){
			if(winScroll + ofset >= items[i].offsetTop + temp){
				$(items[i]).addClass("active");
			}
			else{
				$(items[i]).removeClass("active");
			}
		}
		let hei = winScroll - temp + 190;
		if(hei <= heightBlock){
			$(".roadline__val").css("height", hei + "px");
		}
		else{
			$(".roadline__val").css("height", heightBlock - 4 + "px");
		}
	});

});