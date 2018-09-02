$("ul").on("click", "li", function() {
	// //check if the color of the li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		"color": "black",
	// 		"textDecoration": "none"
	// 	});
	// } 	//then turn the font to gray and strike it through
	// else {
	// 	$(this).css({
	// 		"color":"gray",
	// 		"textDecoration": "line-through"
	// 	});
	// }
	$(this).toggleClass("taskList");
});

//click pn X to delete Task
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("#toDoList").keypress(function(event){
	//check if the enter key is pressed
	if(event.which === 13){
	//extract the input
	var inputText = $(this).val();
	//make a new li to push to the ul
	$("ul").append("<li><span>X</span> " + inputText + "</li>");
	$(this).val("");
	} 
});


