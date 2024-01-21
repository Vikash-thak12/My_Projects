let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {
    const options = ["paper", "rock", "Scissor"];
    const randix = Math.floor(Math.random()*3);
    return options[randix];
}


const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log(userchoice,"was clicked");
        playGame(userchoice);
    })
})