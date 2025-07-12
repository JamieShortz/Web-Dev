let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
const play = document.querySelector(".play"),
	previous = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	//
	trackImage = document.querySelector(".song-img"),
	title = document.querySelector(".title"),
	artist = document.querySelector(".artist"),
	//
	trackCurrentTime = document.querySelector(".current-time"),
	trackDuration = document.querySelector(".duration-time"),
	//
	showVolume = document.querySelector("#show-volume"),
	volumeIcon = document.querySelector("#volume-icon"),
	currentVolume = document.querySelector("#volume"),
	//
	autoPlay = document.querySelector(".play-all"),
	//
	lineBars = document.querySelector(".fa-bars"),
	closeIcon = document.querySelector(".fa-times"),
	//
	musicPlaylist = document.querySelector(".music-playlist"),
	playlist = document.querySelector(".playlist");

	let timer;
	let autoplay = 0;
	let indexTrack = 0;
	let songIsPlaying = false;
	let track = document.createElement("audio");

	// All Event Listeners
	play.addEventListener("click", justplay);
	next.addEventListener("click", nextSong);
	previous.addEventListener("click", prevSong);

	// Load Tracks
	function loadTrack(indexTrack) {
		track.src = trackList[indexTrack].path;
		trackImage.src = trackList[indexTrack].img;
		title.innerHTML = trackList[indexTrack].name;
		artist.innerHTML = trackList[indexTrack].musician;
		track.load();
	}
	loadTrack(indexTrack);

	// Play Song
	function playSong(){
		track.play();
	}

song.onloadedmetadata = function(){
	progress.max = song.duration;
	progress.value = song.currentTime;
}

function playPause(){
	if(ctrlIcon.classList.contains("fa-pause")){
		song.pause();
		ctrlIcon.classList.remove("fa-pause");
		ctrlIcon.classList.add("fa-play");
	}
	else{
		song.play();
		ctrlIcon.classList.add("fa-pause");
		ctrlIcon.classList.remove("fa-play");
	}
}

if(song.play()){
	setInterval(()=>{
		progress.value = song.currentTime;
	},500);
}

progress.onchange = function(){
	song.play();
	song.currentTime = progress.value;
	ctrlIcon.classList.add("fa-pause");
	ctrlIcon.classList.remove("fa-play");
}
		
song.addEventListener("ended", function(){
	ctrlIcon.classList.remove("fa-pause");
	ctrlIcon.classList.add("fa-rotate-left");
})
