
function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    const button_01 = document.createElement("button");
    const button_02 = document.createElement("button");
    const button_03 = document.createElement("button");
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    button_01.addEventListener("click", () => playRound("rock", getComputerChoice()));
    button_02.addEventListener("click", () => playRound("paper", getComputerChoice()));
    button_03.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    button_01.textContent = "Rock";
    button_02.textContent = "Paper";
    button_03.textContent = "Scissors";

    document.body.appendChild(button_01);
    document.body.appendChild(button_02);
    document.body.appendChild(button_03);
    document.body.appendChild(div);
    document.body.appendChild(p1);
    document.body.appendChild(p2);

    const UpdateScore = () =>{
        p1.textContent = `Human Score : ${humanScore}`; 
        p2.textContent = `Computer Score : ${computerScore}`;

        if(humanScore === 5){
            div.textContent = "You are the winner!";
            button_01.disabled = true;
            button_02.disabled = true;
            button_03.disabled = true;
        }
        else if(computerScore === 5){
            div.textContent = "Your opponent is the winner!";
            button_01.disabled = true;
            button_02.disabled = true;
            button_03.disabled = true;
        }
    }

    function getComputerChoice(){
        let guess = Math.floor(Math.random() * 3)
        return guess === 0 ? "rock":
                guess === 1 ? "paper":
                "scissors";
    }

    function playRound(humanChoice, computerChoice){
        
        if(humanChoice == computerChoice) return "Draw!";
        else if (humanChoice == "rock"){
                if (computerChoice == "scissors"){
                    humanScore ++;
                    div.textContent = "You win! Rock beats Scissors"
                }
                else{
                    computerScore ++;
                    div.textContent = "You lose! Paper beats Rock";
                }
        }
        else if (humanChoice == "paper"){
                if (computerChoice == "rock"){
                    humanScore ++;
                    
                    div.textContent = "You win! Paper beats Rock";
                }
                else{
                    computerScore ++;
                    
                    div.textContent = "You lose! Scissors beats Paper";
                }
        }
        else if (humanChoice == "scissors"){
                if (computerChoice == "paper"){
                    humanScore ++;
                    
                    div.textContent = "You win! Scissors beats paper";
                }
                else{
                    computerScore ++;
                    
                    div.textContent = "You lose! Rock beats Scissors";
                }
        }
        UpdateScore();
    }

}
playGame();

