var numb = document.getElementById("numb-input");
var btns = document.getElementsByClassName("btn");
var ul = document.getElementsByTagName("ul")[0];

btns[0].onclick = function() {
	if (numb.value.length <= 0) {
		alert("输入为空");
		return false;
	}
	if (!(/^[0-9]*$/.test(numb.value))) {
		alert("输入有误");
		return false;
	}
	var newNode = document.createElement("li");
	newNode.innerHTML = numb.value;
	ul.insertBefore(newNode, ul.firstChild);
	numb.value = null;
}
btns[1].onclick = function() {
	if (numb.value.length <= 0) {
		alert("输入为空");
		return false;
	}
	if (!(/^[0-9]*$/.test(numb.value))) {
		alert("输入有误");
		return false;
	}
	var newNode = document.createElement("li");
	newNode.innerHTML = numb.value;
	ul.appendChild(newNode);
	numb.value = null;		
}
btns[2].onclick = function() {
	if (ul.hasChildNodes()) {
		alert(ul.firstChild.innerHTML);
		ul.removeChild(ul.firstChild);
	} 
	else {
		alert("队列为空");
		return false;
	}
}
btns[3].onclick = function() {
	if (ul.hasChildNodes()) {
		alert(ul.lastChild.innerHTML);
		ul.removeChild(ul.lastChild);
	}
	else {
		alert("队列为空");
		return false;
	}
}

ul.onmouseover = function() {
	var li = ul.getElementsByTagName("li");
	for (var i in li) {
	}
}