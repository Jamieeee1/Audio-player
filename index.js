let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');


song.onloadedmetadata = function () {
    progress.max = song.duration
    progress.value = song.currentTime
}

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause") ) {
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    } 
    else {
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}


if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    }, 500)
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
}



const listBtn = document.getElementById("circle_bars")
const backbtn = document.getElementById("circle_back")

listBtn.addEventListener("click", () => {
    if (listBtn.classList.contains("close")) {
        document.getElementById('music_list').style.display = "none"
        listBtn.classList.remove("close")
        listBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    else {
        listBtn.classList.add("close")
        document.getElementById('music_list').style.display = "block"
        listBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
    }
})





















































































