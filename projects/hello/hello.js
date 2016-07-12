document.getElementById("button").onclick=function() {addLi()};


function addLi(){
	
	var u = document.getElementById("hwul");
	var l = document.createElement("LI");
	var x = document.createTextNode("Hello World!");
	l.appendChild(x);
	u.appendChild(l);
	
}


