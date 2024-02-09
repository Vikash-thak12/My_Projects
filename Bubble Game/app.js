var timer = 60;
var score = 0; 
var rn;

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
        }
    },1000);
}

function hitscore () {
   rn =  Math.floor(Math.random()*10);
   document.querySelector("#hitscore").textContent = rn;
}

makeBubble();
runtimer();
hitscore();