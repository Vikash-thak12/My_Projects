console.log("Let's write JavaScript");
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

async function main() {
    //list of all the songs
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for(const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20", " ")} </li>`;
    }

    //play the first song
    var audio = new Audio(songs[0]);
    // audio.play();

    audio.addEventListener("loadeddata" , () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime);
    })
}

main()