// fires the code when you press the enter on the keyboard
var btn = document.getElementById("commentText");
btn.addEventListener('keypress', function enterKey(e) {
	if (e.keyCode == 13) {
		appear();
	}; 
}, false);






// function that fires the code when u click on send button on the page
function appear() {
	// gave the input a variable to make life easier
	var list = document.getElementById("commentInput").value;
	console.log(list)
	// gave the comment box a variable to decuce my coding and make my life easier
	var text = document.getElementById("commentText").value;
	console.log(text)

	// created a textnode and placed my input inside it
	var textNode = document.createTextNode(list);
	// created another textnode for my comment box 
	var commentext = document.createTextNode(text)

	// created a li element
	var newList = document.createElement("li");
	// created another li element 
	var newList2 = document.createElement("li");

	// connected the textnode which contains my input to one of the li elements
	newList2.appendChild(textNode)
	// connected my comment box to an li which containes my textarea
	newList.appendChild(commentext);


	document.getElementById("commentList").appendChild(newList2)
	document.getElementById("commentList").appendChild(newList);



}