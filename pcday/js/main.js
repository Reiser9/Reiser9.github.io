$(document).ready(function(){


	$(".call__button").on("click", function(){
		$("body").addClass("scroll");
		$(".modal").removeClass("off");
	});

	$(".modal__cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".modal").addClass("off");
	});

	$('.header__contact').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
	  e.preventDefault();
	});

	$('.header__about').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
	  e.preventDefault();
	});

	$(".modal__button").on("click", function(){
		var name = $(this).siblings('.modal__name').val();
		var city = $(this).siblings('.modal__city').val();
		var address = $(this).siblings('.modal__address').val();
		var phone = $(this).siblings('.modal__phone').val();

		if(!name){
			alert("Введите ФИО");
		}
		else if(!city){
			alert("Введите город");
		}
		else if(!address){
			alert("Введите адрес");
		}
		else if(!phone){
			alert("Введите номер телефона");
		}
		else{
			$.ajax({
                url: "mail.php",
                type: "POST",
                data: {
                	name: name,
                	city: city,
                	address: address,
                    phone: phone
                },
                success: function(){
                    $("body").removeClass("scroll");
                    $(".modal").addClass("off");
                    alert("Заявка успешно отправлена");
                    $(".modal__input").val("");
                }
            });
		}
	});

})