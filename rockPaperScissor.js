// console.log("Hello");


function getComputerChoice(){
    let guess = Math.floor(Math.random() * 3)
    return guess === 0 ? "rock":
           guess === 1 ? "paper":
           "scissors";
}
// console.log(getComputerChoice());

function getHumanChoice(){
    let guess = prompt("ROCK PAPER SCISSORS");
    return guess;
}
// console.log(getHumanChoice());


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice == computerChoice) return "Draw!";
        else if (humanChoice == "rock"){
            if (computerChoice == "scissors"){
                humanScore ++;
                console.log("You win! Rock beats Scissors");
            }
            else{
                computerScore ++;
                console.log("You lose! Paper beats Rock");
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                humanScore ++;
                console.log("You win! Paper beats Rock");
            }
            else{
                computerScore ++;
                console.log("You lose! Scissors beats Paper");
            }
        }
        else if (humanChoice == "scissors"){
            if (computerChoice == "paper"){
                humanScore ++;
                console.log("You win! Scissors beats paper");
            }
            else{
                computerScore ++;
                console.log("You lose! Rock beats Scissors");
            }
        }
    }

    for(let i =0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore){
        console.log("you win!");
    }
    else if(humanScore < computerScore){
        console.log("you lose");
    }
    else{
        console.log("it's a draw");
    }
}
playGame();