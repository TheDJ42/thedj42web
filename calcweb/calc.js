var stack = [];

//Number Button Event Handlers
document.getElementById('zero').onclick = function(){InputNum(this, 0)};

document.getElementById('one').onclick = function(){InputNum(this, 1)};

document.getElementById('two').onclick = function(){InputNum(this, 2)};

document.getElementById('three').onclick = function(){InputNum(this, 3)};

document.getElementById('four').onclick = function(){InputNum(this, 4)};

document.getElementById('five').onclick = function(){InputNum(this, 5)};

document.getElementById('six').onclick = function(){InputNum(this, 6)};

document.getElementById('seven').onclick = function(){InputNum(this, 7)};

document.getElementById('eight').onclick = function(){InputNum(this, 8)};

document.getElementById('nine').onclick = function(){InputNum(this, 9)};


//Function Button event handlers
document.getElementById('plus').onclick = function(){add(stack[0], stack[1])};
document.getElementById('minus').onclick = function(){minus(stack[0], stack[1])};
document.getElementById('divide').onclick = function(){div(stack[0], stack[1])};
document.getElementById('multiply').onclick = function(){multiply(stack[0], stack[1])};
//Enter Key event handler
document.getElementById('enter').onclick = function(){AddToStack()};
//Enter Button Event Handler


function InputNum(button, number){

	var buttonVal = button.name;
	textbox = document.getElementById('numBox' + buttonVal);
	textbox.value += number;
}

function AddToStack(){

	//when the enter key is pressed
	var textbox;
	textbox = document.getElementById('numBox');
	stack.push(textbox.value);
	textbox.value = "";
	//display stack[0] and stack[1]

}
function add(arg1, arg2){
	
	//this is not complete
	CheckStack(arg1, arg2);
	var answer;
	answer = arg1 + arg2;
	//add answer to answer box
	return answer
}

function minus(arg1, arg2){
	
	//Also not complete
	CheckStack(arg1, arg2);
	var answer;
	answer = arg1 - arg2;
	//add answer to answer box
	return answer;
	
}

function multiply(arg1, arg2){
	
	//Also not complete
	CheckStack(arg1, arg2);
	var answer; 
	answer = arg1 * arg2;
	//add answer to stack
	return answer;

}

function div(arg1, arg2){
	
	//Also not complete\
	CheckStack(arg1, arg2);
	var answer; 
	answer = arg1 / arg2;
	//add answer to stack
	return answer;
}

function CheckStack(arg1, arg2){
	if (!arg1 || !arg2){
		alert("You need at least two items in the stack");
		return;
	}
	else {
		return(arg1, arg2);
	}
}
