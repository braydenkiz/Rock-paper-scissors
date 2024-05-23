
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
    gameWon();
});

paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    cpuScoreDisplay.textContent = "Computer Score: " + computerScore;
    gameWon();
});

scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    cpuScoreDisplay.textContent = "Computer Score: " + computerScore;
    gameWon();


});

function gameWon(){

    const winner = document.createElement("div");
    if(humanScore == 5){
        
        
        winner.textContent = " You Win!";
        gameResults.appendChild(winner);
        winner.style.width = "500px";
        winner.style.height = "500px";
        winner.style.margin = "50px";
        winner.style.backgroundColor = "limegreen";
        

       

        
    }else if (computerScore == 5){

        winner.textContent = " You Lose!";
        gameResults.appendChild(winner);
    }else{

    }
    
}