let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {
    const options = ["paper", "rock", "scissor"];
    const randix = Math.floor(Math.random()*3);
    return options[randix];
}


const drawGame = () =>
{
    console.log("Game was Drawn:");
}

const showWinner = (uWin) => {
    if(uWin)
    {
        console.log(" You are the Winner: ");
    }
    else 
    {
        console.log(" You lose the Game: ");
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
        showWinner(uWin);
    }
    
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log(userchoice,"was clicked");
        playGame(userchoice);
    })
})