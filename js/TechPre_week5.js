// Create Howler object

var sound = new Howl({
    src: ['https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'],
    volume: 0.5,
    loop: true,
    autoplay: false
});


// Event Listener
document.getElementById('playpausebutton').addEventListener('click', togglePlayPause);

function togglePlayPause() {
    console.log("Button clicked");
    if (sound.playing()) {
        console.log("Sound is playing, pausing now...");
        sound.pause();
    } else {
        console.log("Sound is not playing, playing now...");
        sound.play();
    }
}