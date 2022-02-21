function playVideo(example) {
    example.play();
}

function pauseVideo(example) {
    example.pause();
    example.currentTime = 0;
    //this should reset the video back to the start once the hover is over
}