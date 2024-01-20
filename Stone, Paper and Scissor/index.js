let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choicId = choice.getAttribute("id")
        console.log(choicId,"was clicked")
    })
})