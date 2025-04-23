// GLOBALS
let CANVAS;
let SPACING;
let MARGIN_RIGHT;
let MARGIN_LEFT;
let CLEF_IMAGE = new Image();
CLEF_IMAGE.src= "clef.png";
let MOUSE={
	x:0,
	y:0,
	isDown:false
}

function main() {
	CANVAS = document.getElementById("myCanvas");
	fitToScreen();
	addEventListener();
	drawScene();
	animate();
}

function animate(){
	drawScene();
	window.requestAnimationFrame(animate);
}

function addEventListener() {
	CANVAS.addEventListener('mousemove',onMouseMove);
	CANVAS.addEventListener('mousedown',onMouseDown);
	CANVAS.addEventListener('mouseup',onMouseUp);
	CANVAS.addEventListener('resize',fitToScreen);
}

function onMouseMove(event){
	MOUSE.x=event.x;
	MOUSE.y=event.y;
}

function onMouseDown(event){
	MOUSE.isDown=true;
	// TO-DO add a note
}

function onMouseUp(event){
	MOUSE.isDown=false;
}

function drawClef(ctx, location) {
	let aspectRatio=CLEF_IMAGE.width/CLEF_IMAGE.height;
	let newHeight=CANVAS.height*0.72;
	let newWidth=aspectRatio*newHeight;

	ctx.drawImage(CLEF_IMAGE,
		location.x-newWidth/2,location.y-newHeight/2.02,
		newWidth,newHeight);
}

function drawNote(ctx,location) {
	ctx.fillStyle="black";
	ctx.strokeStyle="black";
	ctx.lineWidth=1;

	ctx.beginPath();
	ctx.moveTo(location.x+SPACING,
		location.y);
	ctx.lineTo(location.x+SPACING,
		location.y-SPACING*5);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineTo(location.x+SPACING,
		location.y-SPACING*5);
	ctx.bezierCurveTo(
		location.x+SPACING*2, location.y-SPACING*3,
		location.x+SPACING*2.5, location.y-SPACING*3,
		location.x+SPACING*2.5, location.y-SPACING*1);
	ctx.bezierCurveTo(
		location.x+SPACING*2.5, location.y-SPACING*2.7,
		location.x+SPACING*2, location.y-SPACING*2.7,
		location.x+SPACING, location.y-SPACING*4.5);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.save();
	ctx.translate(location.x, location.y);
	ctx.rotate(-0.2);
	ctx.scale(1.05, 0.8);
	ctx.arc(0,0,SPACING,0,Math.PI*2);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function drawScene(){
	let ctx=CANVAS.getContext("2d");
	ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
	ctx.strokeStyle="black";
	ctx.lineWidth=1;
	for(let i=-2; i<=2; i++) {
		let y=CANVAS.height/2+i*SPACING*2;
		ctx.beginPath();
		ctx.moveTo(0,y);
		ctx.lineTo(CANVAS.width,y);
		ctx.stroke();
	}

	let location={
		x:MARGIN_RIGHT,
		y:MOUSE.y
	}
	drawNote(ctx,location);

	drawClef(ctx,{
		x:MARGIN_LEFT,
		y:CANVAS.height/2
	});
}

function fitToScreen() {
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
	SPACING=CANVAS.height/20;
	MARGIN_RIGHT=CANVAS.width*0.8;
	MARGIN_LEFT=CANVAS.width*0.1;
	drawScene();
}