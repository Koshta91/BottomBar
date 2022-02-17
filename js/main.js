var sound = new Audio();
function playSound(url){
    sound.pause();
    sound.currentTime = 0;
    sound.src = url;
    sound.play();
}

