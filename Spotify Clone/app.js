console.log("Let's write JavaScript");
var currentSong = new Audio();
var playbtn = document.querySelector("#play");
var previous = document.querySelector("#previous");
var next = document.querySelector("#next");
let songs;
let currFolder;


//Function to get the songs from the api
async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    let val = div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    return songs;
}


//Function for playing the songs
const playmusic = (track, pause=false) => {
    // let audio = new Audio("/songs/" + track);
    currentSong.src = `/${currFolder}/` + track;
    if(!false) {
        currentSong.play();
        playbtn.src = "pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}


//Functions for converting the seconds into proper fomrat like 00:00
function secConvertor(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);

    // Add leading zeros if necessary
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var secondsStr = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return minutesStr + ':' + secondsStr;
}


//Main function of the JS
async function main() {
    //list of all the songs
    songs = await getSongs("songs/Vikash");
    playmusic(songs[0], true)
    // console.log(songs)

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

    // Listener for updating the current time of the songs
    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secConvertor(currentSong.currentTime)}/${secConvertor(currentSong.duration)}`;
        //the circle will move according to the song %
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100 + "%";
    })

    //Adding eventlistener to the seekbar whenever the cursor will click on the sickbar the circle will be displayed there
    document.querySelector(".seekbar").addEventListener("click", e=> {
        let percent = ((e.offsetX/e.target.getBoundingClientRect().width) * 100);
        console.log(e.offsetX, e.target.getBoundingClientRect().width)
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })

    // Adding an eventlistener when the hamburger clicked then it will show the left block of the website
    document.querySelector(".burger").addEventListener("click", ()=> {
        document.querySelector(".left").style.left = "0";
    })

    //Adding an eventlistener on the cross icon 
    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

     //Adding an eventlistener for the previous button 
     document.querySelector("#previous").addEventListener("click", () => {
        console.log("previous clicked:")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index-1) >= 0) {
            playmusic(songs[index-1])
        }
    })

    //Adding an eventlistener for the next button 
    document.querySelector("#next").addEventListener("click", () => {
        console.log("Next Button clicked:");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if((index+1) < songs.length) 
        {
            playmusic(songs[index+1]);
        }
    })

   //Adding an event Listener to the volume 
   document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    console.log(e.target, e.target.value);
    currentSong.volume = parseInt(e.target.value)/100;
   })

}

main()