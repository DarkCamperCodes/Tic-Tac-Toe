let buttons = document.querySelectorAll("button");
let turn0 = true;
let parah = document.querySelector(".Winner");
let msg = document.querySelector(".Winner");
let msgcont = document.querySelector(".msgcont")
buttons.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turn0)
        {
            box.innerHTML = "X";
            turn0 = false;
        }
        else{
            box.innerHTML = "0";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

let winningpatterns = [
    [0,4,8],
    [0,1,2],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, 
    the WINNER is 
    ${winner}`;
    msgcont.classList.remove("hide");
    disablebtns();
}
const checkWinner = () => {
    for(let pattern of winningpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
            if(pos1 == pos2 && pos2 == pos3)
            {
                showWinner(pos1);
                // .innerText("WINNER WINNER CHICKEN DINNER", pos1);
            }
            
    }    
}
const enablebuttons = () => {
    for(let button of buttons){
        button.disabled = false;
        button.innerHTML = "";
    }
}
const disablebtns = () => {
    for(let button of buttons){
        button.disabled = true;
    }
}
const resetbtn = () => {
    turn0 = true;
    enablebuttons();
    msgcont.classList.add("hide");
}












