console.log("Let's write JavaScript");
var currentSong = new Audio();
var playbtn = document.querySelector("#play");
var previous = document.querySelector("#previous");
var next = document.querySelector("#next");

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    let val = div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}

const playmusic = (track) => {
    // let audio = new Audio("/songs/" + track);
    currentSong.src = "/songs/" + track;
    currentSong.play();
}

async function main() {
    //list of all the songs
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for(const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div> ${song.replaceAll("%20", " ")} </div>
            <div>Vikash</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="play.svg" alt="">
        </div></li>`;
    }

    // Attach an event listener for each song 
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=> {
        e.addEventListener("click", () => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
            // currentSong.src = "pause.svg";
        })
        

    });

    // Attach an event Listener to play the song, can previous it and can next the songs
    playbtn.addEventListener("click", () => {
        if(currentSong.paused) {
            currentSong.play();
            playbtn.src = "pause.svg"
        } else {
            currentSong.pause();
            playbtn.src = "play.svg"
        }
    })


}

main()