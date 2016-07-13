document.getElementById("button").onclick=function() {addLi(helloStr)};
document.getElementById("intel").onclick=function() {addLi(linusStr)};
document.getElementById("eol").onclick=function() {addLi(flynn)};


//vars of the text on the page

var helloStr = "Hello World";
var linusStr = "Intelligence is the ability to avoid doing work, yet getting the work done.";
var flynn = "End of line, man";
function addLi(text){
	
	var u = document.getElementById("mainUL");
	var child = document.getElementsByTagName("li");
	//remove li from ul
	while (u.hasChildNodes()){
		u.removeChild(u.lastChild);
	}
	
	var l = document.createElement("LI");
	var x = document.createTextNode(text);
	l.appendChild(x);
	u.appendChild(l);
	
}


