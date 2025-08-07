//let progress = document.getElementById("progress");
//let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
const play = document.querySelector(".play"),
	previous = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	//
	trackImage = document.querySelector(".song-img"),
	title = document.querySelector(".title"),
	artist = document.querySelector(".artist"),
	slider = document.getElementById("progress"),
	//
	trackCurrentTime = document.querySelector(".current-time"),
	trackDuration = document.querySelector(".duration-time"),
	//
	showVolume = document.querySelector("#show-volume"),
	volumeIcon = document.querySelector("#volume-icon"),
	currentVolume = document.querySelector("#volume"),
	//
	autoPlayBtn = document.querySelector(".play-all"),
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

	play.onloadedmetadata = function(){
				progress.max = play.duration;
				progress.value = play.currentTime;
			}

	// All Event Listeners
	play.addEventListener("click", justPlay);
	next.addEventListener("click", nextSong);
	previous.addEventListener("click", prevSong);
	autoPlayBtn.addEventListener("click", autoPlayToggle);
	volumeIcon.addEventListener("click", muteSound);
	currentVolume.addEventListener("change", changeVolume);
	slider.addEventListener("change", changeDuration);
	track.addEventListener("timeupdate", updateSongTime);

	// Load Tracks
	function loadTrack(indexTrack) {
		clearInterval(timer);
		resetSlider();


		track.src = trackList[indexTrack].path;
		trackImage.src = trackList[indexTrack].thumbnail;
		title.innerHTML = trackList[indexTrack].name;
		artist.innerHTML = trackList[indexTrack].musician;
		track.load();

		timer = setInterval(updateSlider, 1000);
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
	function nextSong(){
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

	// Mute Sound
	function muteSound(){
		track.volume = 0;
		showVolume.innerHTML = 0;
		currentVolume.value = 0;
	}

	// Change Volume
	function changeVolume(){
		showVolume.value = currentVolume.value;
		track.volume = currentVolume.value / 100;
	}

	// Change Duration
	function changeDuration(){
		let sliderPosition = track.duration * (slider.value / 100);
		track.currentTime = sliderPosition;
	}

	// Auto Play

	function autoPlayToggle(){
		if (autoplay == 0) {
			autoplay = 1;
			autoPlayBtn.style.background = "#f53192";
			autoPlayBtn.style.color = "#fff";
		} else{
			autoplay = 0;
			autoPlayBtn.style.background = "#fff";
			autoPlayBtn.style.color = "#f53192";
		}
	}

	// Reset Slider
	function resetSlider(){
		slider.value = 0;
	}

	// Update Slider
	function updateSlider(){
		let position = 0;

		if (!isNaN(track.duration)) {
			position = track.currentTime * (100 / track.duration);
			slider.value = position;
		}

		if (track.ended){
			play.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
			if (autoplay == 1 && indexTrack < trackList.length -1){
				indexTrack++
				loadTrack(indexTrack);
				playSong();
			} else if (autoplay == 1 && indexTrack == trackList.length - 1) {
				indexTrack = 0;
				loadTrack(indexTrack);
				playSong();
			}
		}
	}

	// Update song timer
	function updateSongTime(){
		let currentMin = Math.floor(track.currentTime / 60);
		let currentSec = Math.floor(track.currentTime - currentMin * 60);
		let durationMin = Math.floor(track.duration / 60);
		let durationSec = Math.floor(track.duration - durationMin * 60);
	}


/*
play.addEventListener("ended", function(){
	ctrlIcon.classList.remove("fa-pause");
	ctrlIcon.classList.add("fa-rotate-left");
})

if(play.play()){
	setInterval(()=>{
		progress.value = play.currentTime;
	},500);
}

progress.onchange = function(){
	play.play();
	play.currentTime = progress.value;
	ctrlIcon.classList.add("fa-pause");
	ctrlIcon.classList.remove("fa-play");
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
*/