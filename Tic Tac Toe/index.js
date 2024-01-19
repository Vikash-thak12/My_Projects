let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let NewGame = document.querySelector("#newgame-btn");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg-container");

let turnO = true;

const winnerpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]



// This function is for disabling the boxes after the winner is declared
const disabledboxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


// This function is for enabling the box after new game 
const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}


// This function is for reseting the game 
const ResetGame = () => {
    turnO = true;
    enableboxes();
    msg_container.classList.add("hide");
}


// This function is for showing the winner name 
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledboxes();
}



// This function is for checking the winner 
const checkwinner = () =>
{
    for(let pattern of winnerpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != ""  && pos2val != ""  && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}



//This is the loop where each box will be given a value like x or O
boxes.forEach((box) =>
{
    box.addEventListener("click", () => {
        console.log("Box was clicked:")
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})




// These are the two btn where resetgame function will be triggered
reset_btn.addEventListener("click", ResetGame);
NewGame.addEventListener("click", ResetGame);