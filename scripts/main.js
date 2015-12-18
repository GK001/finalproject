(function(){

$(".text-box_end").on("click", showModal);

$ (".close").on("click", closeModal);

function showModal() {
	$(".modal-gray").css("display", "flex");
}

function closeModal() {
	$(".modal-gray").css("display", "none");
}

})();




