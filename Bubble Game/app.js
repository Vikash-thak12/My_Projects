var timer = 10;
var score = 0; 
var rn;
var mainLog = document.querySelector("#second");

//This is the function for making bubble in the second page
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 140; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="circle"><span>${num}</span></div>`;
    }

    document.querySelector("#second").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval( function () {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            mainLog.innerHTML = `<h2>Game Over !!! <br> You scored ${score} points!</h2>`;
            // mainLog.innerHTML = `<h2>You Scored ${increaseScore()}</h2>`;
        }
    },1000);
}

function hitscore () {
   rn =  Math.floor(Math.random()*10);
   document.querySelector("#hitscore").textContent = rn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

mainLog.addEventListener("click", (details) => {
    var num = Number(details.target.textContent);
    if(num === rn) {
        increaseScore();
        makeBubble();
        hitscore();
    }
})



makeBubble();
runtimer();
hitscore();