$(document).ready(function(){

	$(".upgradeModalClose").on("click", function(){
        $(".modal").removeClass("active");
    });

    $(".goModal").on("click", function(){
        const modal = $(this).attr("data-modal");

        if(!modal) return;

        $(".modal").removeClass("active");
        $(".modal[data-modal="+modal+"]").addClass("active");
    });

});