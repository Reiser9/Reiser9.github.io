$(document).ready(function(){

	function close(){
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".faq__item").on('click', function(){
		$(this).children(".faq__item--answer").slideToggle(200);
	});

	const rotate = () => {
		let scroll = $(".nft__inner").scrollTop();
		let winScroll = $(window).scrollTop();
		scroll = winScroll - (scroll + 1400);
		$(".nft__inner").css("transform", "translateX("+scroll/4+"px)");
	}

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	rotate();
	const ofset = 350;
	$(document).scroll(function(){
		rotate();

		let temp = $(".road__content").offset().top;
		let heightBlock = $(".road__content").height();
		let items = $(".road__item");
		let winScroll = $(window).scrollTop();

		for(let i = 0; i < items.length; i++){
			if(winScroll + ofset >= items[i].offsetTop + temp){
				$(items[i]).addClass("active");
			}
			else{
				$(items[i]).removeClass("active");
			}
		}
		let hei = winScroll - $(".road__content").offset().top + ofset;
		if(hei <= heightBlock){
			$(".road__line").css("height", hei + "px");
		}
		else{
			$(".road__line").css("height", heightBlock + "px");
		}
	});

	const changeMainImg = (num) => {
		$(".main__bull").removeClass("active");
		$(".main__bull"+num).addClass("active");
	}

	let i = 2;
	const timeout = setInterval(() => {
		changeMainImg(i);
	    i++;
	    if(i > $(".main__bull").length){
	    	clearInterval(timeout);
	    }
	}, 2000);

	$(".menu").on('click', function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".cross").on('click', function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 768){
			close();
		}
	});

	$('.founders__content').slick({
		infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
	  	    {
	  	        breakpoint: 998,
	  	        settings: {
		  	        slidesToShow: 2,
		  	        dots: true,
		  	        arrows: false
	  	        }
	  	    },
	  	    {
	  	        breakpoint: 768,
	  	        settings: {
		  	        slidesToShow: 1,
		  	        arrows: false,
		  	        dots: true,
	  	        }
	  	    }
	  	]
	});

});