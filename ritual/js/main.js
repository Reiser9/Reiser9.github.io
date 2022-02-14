$(document).ready(function(){

	$(".form").on("click", function(){
		let top = $("#form").offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	$(".send").on("click", function(){
		let name = $(".name").val().trim();
		let email = $(".email").val().trim();
		let phone = $(".phone").val().trim();

		if(!name){
			alert("Введите ваше имя!");
		}
		else if(!email){
			alert("Введите адрес электронной почты!")
		}
		else if(!phone){
			alert("Введите номер телефон!")
		}
		else{
			$.ajax({
				method: "POST",
				url: "mail.php",
				data: {
					name: name,
					email: email,
					phone: phone
				},
				success: function(){
					alert("Заявка успешно отправлена!");
				}
			});
		}
	});

});