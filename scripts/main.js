(function(){

	var connect = $(".text-box_end"),
		modals = $(".modal-gray"),
		close = $(".close");




function openModal(){	
var idxOfClicked = connect.index(this);
	$(modals[idxOfClicked]).css("display", "flex");
}

connect.on("click", openModal);


function closeModal() {
	modals.css("display", "none");
}

close.on("click", closeModal);




})();





