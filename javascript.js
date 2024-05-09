

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



function getHumanChoice(){

    let playerChoice = prompt("Enter Rock,Paper,or Scissors :");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === "rock"){
        return "rock";
    }else if(playerChoice === "paper"){
        return "paper";
    }else if(playerChoice === "scissors"){
        return "scissors";
    }else {
        getHumanChoice();
    }
}






playRound(humanSelection, computerSelection);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

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

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if(humanScore > computerScore){
        console.log("Player wins the game!!!");
    }else {
        console.log("Player loses the game :(");
    }
    
}