// GLOBALS
let CANVAS;

function main() {
	CANVAS = document.getElementById("myCanvas");
	fitToScreen();
}

function fitToScreen() {
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
}