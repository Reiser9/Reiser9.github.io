$(document).ready(function(){

	function rotate(){
		let scroll = $(window).scrollTop();
		$(".main__circle--dog").css("transform", "rotate("+scroll/4+"deg)");
	}
	rotate();
	$(document).scroll(function(){
		rotate();
	});

});