

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

   
    

   
    
    
}
playGame();