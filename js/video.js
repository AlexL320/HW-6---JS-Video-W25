var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("loop is set to " + video.loop);

	//Plays the video
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		var volume = document.getElementById("volume");
		volume.innerHTML = slidvol * 100 + "%";
	});

	//Pauses the video
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	//Slows down the video
	document.querySelector("#slower").addEventListener("click", function(){
		console.log("Slowing Video");
		video.playbackRate = video.playbackRate - 0.1;
		var new_speed = video.playbackRate;
		console.log("New Speed: " + new_speed);
	});

	//Speeds up the video
	document.querySelector("#faster").addEventListener("click", function(){
		console.log("Speeding Video");
		video.playbackRate = video.playbackRate + 0.1;
		var new_speed = video.playbackRate;
		console.log("New Speed: " + new_speed);
	});

	//Skips ten seconds of the video
	document.querySelector("#skip").addEventListener("click", function(){
		video.currentTime += 10;
		console.log("Skipped 10 seconds");
	});

	//Mutes the video
	document.querySelector("#mute").addEventListener("click", function(){
		if(video.muted == false){
			console.log("Mutting video");
			video.muted = true;
			this.innerHTML = "Unmute";
		}
		else if(video.muted == true){
			console.log("Unmutting video");
			video.muted = false;
			this.innerHTML = "Mute";
		}
	});

	//Changes the volume of the video
	volume.innerHTML = "100%";
	document.querySelector("#slider").addEventListener("change", function(){
		console.log("Changing volume");
		var slidvol = document.getElementById("slider").value / 100;
		console.log(slidvol);
		var volume = document.getElementById("volume");
		volume.innerHTML = slidvol * 100 + "%";
		video.volume = slidvol;
	});

	// Removes the style of the video
	this.document.querySelector("#vintage").addEventListener("click", function(){
		console.log("Oldschool style");
		const video_id = document.getElementById("player1");
		video_id.classList.add("oldSchool");	
	});

	this.document.querySelector("#orig").addEventListener("click", function(){
		console.log("Orignal style");
		const video_id = document.getElementById("player1");
		video_id.classList.remove("oldSchool");	
	});
});
