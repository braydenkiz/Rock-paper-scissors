let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice());

function getHumanChoice(){

    let playerChoice = prompt("Enter Rock,Paper,or Scissors :");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === "rock"){
        return "rock";
    }else if(playerChoice === "paper"){
        return "paper";
    }else {
        return "scissors";
    }
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Draw");
    }else if()
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);