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
	ctx.strokeStyle="black";
	ctx.lineWidth=1;
	for(let i=-2; i<=2; i++) {
		let y=CANVAS.height/2+i*spacing*2;
		ctx.beginPath();
		ctx.moveTo(0,y);
		ctx.lineTo(CANVAS.width,y);
		ctx.stroke();
	}
}

function fitToScreen() {
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
}