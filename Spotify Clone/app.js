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
            songs.push(element.href)
        }
    }
    return songs;
}

async function main() {

    //getting the list of all the songs
    let songlist = await getSongs();
    console.log(songlist);

    // Play the songs in the array sequentially
    let index = 0;

    function playNextSong() {
        if (index < songlist.length) {
            var audio = new Audio(songlist[index]);
            audio.addEventListener('ended', function() {
                index++;
                playNextSong();
            });
            audio.play();
        }
    }

    // Wait for user interaction
    document.addEventListener("click", function() {
        playNextSong();
    }, { once: true }); // The event listener will only trigger once
}

main()