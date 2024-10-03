document.addEventListener("DOMContentLoaded", function () {
	let title = document.getElementById("titulo");

	title.addEventListener("mouseover", mouseOver);
	title.addEventListener("mouseout", mouseOut);
	title.addEventListener("click", click);
});

function mouseOver() {
	this.innerHTML = "Mouse ON";
}

function mouseOut() {
	this.innerHTML = "Mouse OUT";
}

function click() {
	this.style.backgroundColor = "green";
}
