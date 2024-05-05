// Ensures flow between all parts of the website.

document.querySelector("#startTest").onclick = function() {
	environment.initalize();
	document.querySelector("#startPage").style.display = "none";
	document.querySelector("#examPage").style.display = "flex";
}