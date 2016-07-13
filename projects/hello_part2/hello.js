document.getElementById("button").onclick=function() {addLi()};
document.getElementById("intel").onclick=function() {addLi()};
document.getElementById("eol").onclick=function() {addLi()};

function addLi(){
	
	var u = document.getElementById("mainUL");
	var child = document.getElementsByTagName("li");
	//remove li from ul
	while (u.hasChildNodes()){
		u.removeChild(u.lastChild);
	}
	
	var l = document.createElement("LI");
	var x = document.createTextNode("text");
	l.appendChild(x);
	u.appendChild(l);
	
}


