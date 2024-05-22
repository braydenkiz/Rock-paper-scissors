

function getComputerChoice(){
    let cpu = Math.ceil(Math.random() * 3);
    if(cpu == 1){
        return "rock";
    }else if(cpu == 2){
        return "paper";
    }else {
        return "scissors"
    }
}





const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

rockbtn.addEventListener("click", playRound("rock", getComputerChoice));





    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("Draw");
            console.log(computerChoice);
        }else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
            humanScore++;
            console.log("Player wins the round!")
            console.log(computerChoice);
        }else {
            computerScore++;
            console.log("Player lost the round!");
            console.log(computerChoice)
        }
    }
    


rockbtn.addEventListener("click", playRound("rock", getComputerChoice));
paperbtn.addEventListener("click", playRound("paper", getComputerChoice));
sccisorsbtn.addEventListener("click", playRound("scissors", getComputerChoice));