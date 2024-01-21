let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {
    const options = ["paper", "rock", "Scissor"]
}


const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compChoice = 
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        console.log(userchoice,"was clicked")
    })
})