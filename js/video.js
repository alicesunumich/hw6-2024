var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {video.play();
// console.log("Play Video");
// }

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Play Video");
});


var video = document.getElementById("player1"); // Get the video player element
var volumeDisplay = document.getElementById("volume");


    // Pause video button
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    // Slow down video button
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9; // Decrease playback speed by 10%
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });

    // Speed up video button
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate *= 1.1; // Increase playback speed by 10%
        console.log("New speed is " + video.playbackRate.toFixed(5));
    });

    // Skip ahead button
	document.getElementById("skip").addEventListener("click", function() {
        let newTime = video.currentTime + 10;
        if (newTime > video.duration) {
            video.currentTime = 0; // If skipping past the end, loop back to the beginning
            console.log("Reached end, going back to the beginning");
        } else {
            video.currentTime = newTime;
        }
        console.log("Current time after skip: " + video.currentTime.toFixed(2) + "s");
    });

	    // Handle mute button
		document.getElementById("mute").addEventListener("click", function() {
			video.muted = !video.muted;
			document.getElementById("mute").textContent = video.muted ? "Unmute" : "Mute";
			console.log("Mute status: " + (video.muted ? "Muted" : "Unmuted"));
		});
	
		// Handle volume slider
		document.getElementById("slider").addEventListener("input", function() {
			var newVolume = this.value; // Get the current value of the slider
			video.volume = newVolume / 100; // Set the video's volume
			volumeDisplay.textContent = newVolume + "%"; // Update the display text
			console.log("Volume set to: " + newVolume + "%");
		});

		    // Ensure the volume display is correct on page load
			volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";

// Handle Old School button for black and white effect
document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Video effect changed to Old School (black and white)");
});

// Handle Original button to revert to color
document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Video effect reverted to Original (color)");
});
