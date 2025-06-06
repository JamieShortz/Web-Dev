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

let SPEED = 0.005;
let HOLD_DURATION=300;

let NOTES = ["E6", "D6", "C6", "B5", "A5", "G5", "F5", "E5", "D5", 
	"C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4", "B3", "A3", "G3", "F3"
];

let FREQ = [1318.51, 1174.66, 1046.5, 987.767, 880, 783.991, 698.456, 
	659.255, 587.33, 523.251, 493.883, 436.04, 392.44, 349.228, 
	329.628, 293.665, 261.626, 246.942, 220, 195.998, 174.614];

let MOVING_NOTES=[];

let AUDIO_CONTEXT;

class MovingNote{
	constructor(location, duration){
		let index=Math.round(location.y/SPACING);
		this.frequency=FREQ[index];
		this.location={
			x:location.x,
			y:index*SPACING
		}
		this.duration=duration;
		this.born=new Date().getTime();
	}
	draw(ctx){
		drawNote(ctx, this.location, this.duration);
	}
	update(){
		let timeDiff=new Date().getTime()-this.born;
		let noteType=Math.floor(timeDiff/HOLD_DURATION);
		switch(noteType){
		case 0:this.duration=0.5; break;
		case 1:this.duration=1; break;
		case 2:this.duration=2; break;
		case 3:this.duration=4; break;
		}
	}
	play(){
		if(AUDIO_CONTEXT==null){
			AUDIO_CONTEXT = new(AudioContext ||
				webkitAudioContext ||
				window.webkitAudioContext) ()
		}
		let osc=AUDIO_CONTEXT.createOscillator();
		osc.type="triangle";

		let gainNode=AUDIO_CONTEXT.createGain();
		gainNode.gain.setValueAtTime(0,AUDIO_CONTEXT.
		currentTime);
		gainNode.gain.linearRampToValueAtTime(0.4,
		AUDIO_CONTEXT.currentTime+0.05);
		gainNode.gain.linearRampToValueAtTime(0,
		AUDIO_CONTEXT.currentTime+this.duration);

		osc.frequency.value=this.frequency;
		osc.start(AUDIO_CONTEXT.currentTime);		
		osc.stop(AUDIO_CONTEXT.currentTime+this.duration);
		osc.connect(gainNode);
		gainNode.connect(AUDIO_CONTEXT.destination);
	}
}

function main() {
	CANVAS = document.getElementById("myCanvas");
	fitToScreen();
	addEventListener();
	drawScene();
	animate();
}

function updateMovingNotes(){
	for (let i=0; i<MOVING_NOTES.length; i++){
		MOVING_NOTES[i].location.x-=SPEED*CANVAS.width;
		if(MOVING_NOTES[i].location.x<=MARGIN_LEFT){
			MOVING_NOTES[i].play();
			MOVING_NOTES.splice(i,1);
			i--;
		}
	}
	if(MOUSE.isDown==true && MOVING_NOTES.length>0){
		MOVING_NOTES[MOVING_NOTES.length-1].update();
	}
}


function animate(){
	updateMovingNotes();
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
	MOVING_NOTES.push(new MovingNote({
		x:MARGIN_RIGHT,
		y:MOUSE.y
	},0.5));
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

function drawNote(ctx,location,duration) {
	ctx.fillStyle="black";
	ctx.strokeStyle="black";
	ctx.lineWidth=1;

	if(duration<4){
		ctx.beginPath();
		ctx.moveTo(location.x+SPACING,
			location.y);
		ctx.lineTo(location.x+SPACING,
			location.y-SPACING*5);
		ctx.stroke();
	}

	if (duration ==0.5){
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
	}
	ctx.beginPath();
	ctx.save();
	ctx.translate(location.x, location.y);
	ctx.rotate(-0.2);
	ctx.scale(1.05, 0.8);
	ctx.arc(0,0,SPACING,0,Math.PI*2);
	if(duration<=1)
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
	let index=Math.round(MOUSE.y/SPACING);
	let location={
		x:MARGIN_RIGHT,
		y:index*SPACING
	}
	drawNote(ctx,location, 0.5);

	for(let i=0; i<MOVING_NOTES.length;i++){
		MOVING_NOTES[i].draw(ctx);
	}

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