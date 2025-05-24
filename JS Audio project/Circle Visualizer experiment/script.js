const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const file = document.getElementById("fileupload");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;

container.addEventListener('change', function(){
	const audioContext = new AudioContext();
	audio1.play();
	audioSource = audioContext.createMediaElementSource(audio1);
	analyser = audioContext.createAnalyser();
	audioSource.connect(analyser);
	analyser.connect(audioContext.destination);
	analyser.fftSize = 256;
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array(bufferLength);

	const barWidth = 15;
	let barHeight; //???
	let x; //???

	function animate(){
		x = 0;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		analyser.getByteFrequencyData(dataArray);
		drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
		requestAnimationFrame(animate);
	}
	animate();
});

file.addEventListener('change', function(){
	const files = this.files;
	const audio1 = document.getElementById('audio1');
	audio1.src = URL.createObjectURL(files[0]);
	audio1.load();
	audio1.play();

	audioSource = audioContext.createMediaElementSource(audio1);
	analyser = audioContext.createAnalyser();
	audioSource.connect(analyser);
	analyser.connect(audioContext.destination);
	analyser.fftSize = 256;
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array(bufferLength);

	const barWidth = 15;
	let barHeight; //???
	let x; //???

	function animate(){
		x = 0;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		analyser.getByteFrequencyData(dataArray);
		drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
		requestAnimationFrame(animate);
	}
	animate();
})

function drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray){
	for (let i = 0; i < bufferLength; i++){
			barHeight = dataArray[i] * 2;
			ctx.save();
			ctx.translate(canvas.width/2, canvas.height/2);
			ctx.rotate( 4 + i * 6);
			const hue = i * 60;
			ctx.fillStyle = 'hsl(' + hue + ',100%,' + barHeight/8 + '%)';
			ctx.fillRect(10, 40, barWidth, barHeight);
			x += barWidth;
			ctx.restore();
		}
}