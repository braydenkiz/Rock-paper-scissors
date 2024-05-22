
let computerScore = 0;
let humanScore = 0;
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

const humanScoreDisplay = document.querySelector("#human");
const cpuScoreDisplay = document.querySelector("#cpu");

const gameResults = document.querySelector("#results");






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
    


rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    cpuScoreDisplay.textContent = "Computer Score: " + computerScore;
});

paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    cpuScoreDisplay.textContent = "Computer Score: " + computerScore;
});

scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    cpuScoreDisplay.textContent = "Computer Score: " + computerScore;


});