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
    console.log(playerChoice);
}
getHumanChoice();