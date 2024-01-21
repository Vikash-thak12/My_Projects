let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorevalue = document.querySelector("#user-score");
const compscorevalue = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["paper", "rock", "scissor"];
    const randix = Math.floor(Math.random()*3);
    return options[randix];
}


const drawGame = () =>
{
    console.log("Game was Drawn:");
    msg.innerText = "Game Draw. Play Again";
    msg.style.background = "Black";
}

const showWinner = (uWin, userchoice, compChoice) => {
    if(uWin)
    {
        userscore++;
        userscorevalue.innerText = (userscore);
        console.log(" You are the Winner: ");
        msg.innerText = ` You win. Your ${userchoice} beats ${compChoice} `;
        msg.style.background = "Green";
    }
    else 
    {
        compscore++;
        compscorevalue.innerText = (compscore);
        console.log(" You lose the Game: ");
        msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
        msg.style.background = "Red";
    }
}


const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userchoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let uWin = true;
        if(userchoice === "paper")
        {
            // rock and scissor
            uWin = compChoice === "scissor" ? false: true;
        }
        else if(userchoice === "rock")
        {
            // paper and scissor
            uWin = compChoice === "paper" ? false : true;
        }
        else
        {
            uWin = compChoice === "rock" ? false : true;
        }
        showWinner(uWin, userchoice, compChoice);
    }
    
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log(userchoice,"was clicked");
        playGame(userchoice);
    })
})