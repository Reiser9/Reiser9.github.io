$(document).ready(function(){

	// Прелоудер

	$(window).on('load', function () {
      $('#preloader').delay(500).fadeOut(300);
    });

    var c = document.getElementById('c'),
        ctx = c.getContext('2d'),
        cw = c.width = 300,
    		ch = c.height = 300,
        rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);},
        dToR = function(degrees){
            return degrees * (Math.PI / 180);
        },
        circle = {
          x: (cw / 2) + 5,
          y: (ch / 2) + 22,
          radius: 90,
          speed: 2,
          rotation: 0,
          angleStart: 270,
          angleEnd: 90,
          hue: 220,
          thickness: 18,
          blur: 25
        },
        particles = [],
        particleMax = 100,
        updateCircle = function(){
          if(circle.rotation < 360){
          	circle.rotation += circle.speed;
          } else {
          	circle.rotation = 0; 
          }
        },
        renderCircle = function(){
          ctx.save();
          ctx.translate(circle.x, circle.y);
          ctx.rotate(dToR(circle.rotation));
          ctx.beginPath();
          ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
          ctx.lineWidth = circle.thickness;    
          ctx.strokeStyle = gradient1;
          ctx.stroke();
          ctx.restore();
        },
        renderCircleBorder = function(){
          ctx.save();
          ctx.translate(circle.x, circle.y);
          ctx.rotate(dToR(circle.rotation));
          ctx.beginPath();
          ctx.arc(0, 0, circle.radius + (circle.thickness/2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
          ctx.lineWidth = 2;  
          ctx.strokeStyle = gradient2;
          ctx.stroke();
          ctx.restore();
        },
    		renderCircleFlare = function(){
          ctx.save();
          ctx.translate(circle.x, circle.y);
          ctx.rotate(dToR(circle.rotation+185));
          ctx.scale(1,1);
          ctx.beginPath();
          ctx.arc(0, circle.radius, 30, 0, Math.PI *2, false);
          ctx.closePath();
          var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 30);      
          gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
          gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
          ctx.fillStyle = gradient3;
          ctx.fill();     
          ctx.restore();
        },
        renderCircleFlare2 = function(){
          ctx.save();
          ctx.translate(circle.x, circle.y);
          ctx.rotate(dToR(circle.rotation+165));
          ctx.scale(1.5,1);
          ctx.beginPath();
          ctx.arc(0, circle.radius, 25, 0, Math.PI *2, false);
          ctx.closePath();
          var gradient4 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 25);
          gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
          gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
          ctx.fillStyle = gradient4;
          ctx.fill();     
          ctx.restore();
        },
        createParticles = function(){
          if(particles.length < particleMax){
            particles.push({
              x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
              y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
              vx: (rand(0, 100)-50)/1000,
              vy: (rand(0, 100)-50)/1000,
              radius: rand(1, 6)/2,
              alpha: rand(10, 20)/100
            });
          }
        },
        updateParticles = function(){
          var i = particles.length;
          while(i--){
          	var p = particles[i];
            p.vx += (rand(0, 100)-50)/750;
            p.vy += (rand(0, 100)-50)/750;
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= .01;
            
            if(p.alpha < .02){
              particles.splice(i, 1)
            }
          }
        },
        renderParticles = function(){
          var i = particles.length;
          while(i--){
          	var p = particles[i];
            ctx.beginPath();
            ctx.fillRect(p.x, p.y, p.radius, p.radius);
            ctx.closePath();
            ctx.fillStyle = 'hsla(0, 0%, 100%, '+p.alpha+')';
          }
        },
        clear = function(){
          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0, 0, 0, .1)';
          ctx.fillRect(0, 0, cw, ch);
          ctx.globalCompositeOperation = 'lighter';		
        }
        loop = function(){
          clear();
          updateCircle();
          renderCircle();
          renderCircleBorder();
          renderCircleFlare();
          renderCircleFlare2();
          createParticles();
          updateParticles();
          renderParticles();
        }

    /* Append Canvas */
    //document.body.appendChild(c);

    /* Set Constant Properties */
    ctx.shadowBlur = circle.blur;
    ctx.shadowColor = 'hsla('+circle.hue+', 80%, 60%, 1)';
    ctx.lineCap = 'round'
      
    var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient1.addColorStop(0, 'hsla('+circle.hue+', 60%, 50%, .25)');
    gradient1.addColorStop(1, 'hsla('+circle.hue+', 60%, 50%, 0)');
      
    var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient2.addColorStop(0, 'hsla('+circle.hue+', 100%, 50%, 0)');
    gradient2.addColorStop(.1, 'hsla('+circle.hue+', 100%, 100%, .7)');
    gradient2.addColorStop(1, 'hsla('+circle.hue+', 100%, 50%, 0)');

    /* Loop It, Loop It Good */
    setInterval(loop, 16);

	// Модальное окно карточки товара

	$(".modal__card--cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal__card").fadeOut(200);
	});

	$(".katalog__carousel--item").on("click", function(){
		var img = $(this).children(".katalog__carousel--img--inner")
		.children(".katalog__carousel--img").attr("src");
		var title = $(this).children(".katalog__carousel--title")
		.text();
		var text = $(this).children(".katalog__carousel--text")
		.text();

		$(".modal__card--img").attr("src", img);
		$(".modal__card--title").text(title);
		$(".modal__card--text").text(text);
		$("body").addClass("scroll");
		$(".modal__card").fadeIn(200);
	});

	// Скролл при нажатии "Вниз" на главной блоке

	$(".scroll__down").on("click", function(){
		$('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
	});

	$(".header__nav--link").on("click", function(e){
		e.preventDefault();
		if($(this).hasClass("mobile")){
			$(".mobile__menu").removeClass("active2");
			$(".mobile__cross").removeClass("active2");
			$(".modal__menu").removeClass("active");
			$("body").removeClass("scroll");
		}
		var link = $(this).attr('data-link');
		$('html,body').stop().animate({ scrollTop: $('#'+link+'').offset().top }, 1000);
	})

	// Сдвиг текста при фокусе/анфокусе input

	$(".modal__input").on("focus", function(){
		$(this).siblings(".modal__text--input").addClass("active");
	});

	$(".modal__input").on("focusout", function(){
		var modal = $(this).val();
		if(!modal){
			$(this).siblings(".modal__text--input").removeClass("active");
		}
	});

	// Модальное окно отправить заявку открытие/закрытие

	$(".main__application").on("click", function(e){
		$("body").addClass("scroll");
		$(".modal").fadeIn(200);
		e.preventDefault();
	});

	$(".modal__cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal").fadeOut(200);
	});

	// Мобильное меню

	$(".mobile__menu--icon").on("click", function(){
		var wid = $(document).width();
		if(wid >= 752 && wid < 982){
			$(".mobile__menu").toggleClass("active");
			$(".mobile__cross").toggleClass("active");
			$(".mobile__plash").slideToggle(100).css("display", "flex");
		}
		else if(wid < 752){
			$(".mobile__menu").toggleClass("active2");
			$(".mobile__cross").toggleClass("active2");
			$(".modal__menu").toggleClass("active");
			$("body").toggleClass("scroll");
		}
	});

	$(window).resize(function(){
		if($(window).width() >= 982){
			$(".mobile__menu").removeClass("active");
			$(".mobile__cross").removeClass("active");
			$(".mobile__plash").slideUp(100);
		}

		if($(window).width() < 752){
			$(".mobile__menu").removeClass("active");
			$(".mobile__cross").removeClass("active");
			$(".mobile__plash").slideUp(100);
		}

		if($(window).width() > 752){
			$(".mobile__menu").removeClass("active2");
			$(".mobile__cross").removeClass("active2");
			$(".modal__menu").removeClass("active");
			$("body").removeClass("scroll");
		}
	});

	// Карусель

	$(".about__carousel--inner").slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
	});

	$(".katalog__carousel--inner").slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="carousel__arrow prev__arrow"><img src="img/prev.png" alt="" class="prev__arrow--img"></div>',
		nextArrow: '<div class="carousel__arrow next__arrow"><img src="img/next.png" alt="" class="next__arrow--img"></div>',
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 998,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }
		  ]
	});

	$(".work__carousel--inner").slick({
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 998,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
	});

});