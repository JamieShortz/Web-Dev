//let progress = document.getElementById("progress");
//let song = document.getElementById("song");
//let ctrlIcon = document.getElementById("ctrlIcon");
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
	play.addEventListener("click", justPlay);
	next.addEventListener("click", nextSong);
	previous.addEventListener("click", prevSong);


	// Load Tracks
	function loadTrack(indexTrack) {
		track.src = trackList[indexTrack].path;
		trackImage.src = trackList[indexTrack].thumbnail;
		title.innerHTML = trackList[indexTrack].name;
		artist.innerHTML = trackList[indexTrack].musician;
		track.load();
	}
	loadTrack(indexTrack);

	function justPlay(){
		if (songIsPlaying == false) {
			playSong();
		} else{
			pauseSong();
		}
	}

	// Play Song
	function playSong(){
		track.play();
		songIsPlaying = true;
		play.innerHTML = '<i class="fa-solid fa-pause"></i>';
	}

	// Pause Song
	function pauseSong(){
		track.pause();
		songIsPlaying = false;
		play.innerHTML = '<i class="fa-solid fa-play"></i>';
	}

	//Next Track
	function nextSong() {
		if (indexTrack < trackList.length - 1) {
			indexTrack++;
			loadTrack(indexTrack);
			playSong();
		} else {
			indexTrack = 0;
			loadTrack(indexTrack)
			playSong();
		}
	}

	//Prev Track
	function prevSong() {
		if (indexTrack > 0) {
			indexTrack--;
			loadTrack(indexTrack);
			playSong();
		} else {
			indexTrack = trackList.length - 1;
			loadTrack(indexTrack)
			playSong();
		}
	}
/*
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
*/