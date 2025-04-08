// GLOBALS
let CANVAS;

function main() {
	CANVAS = document.getElementById("myCanvas");
	fitToScreen();
	drawScene();
}

function drawScene(){
	let ctx=CANVAS.getContext("2d");
	let spacing=CANVAS.height/20;
}

function fitToScreen() {
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
}