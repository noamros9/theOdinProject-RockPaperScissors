let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log("human selection is" + " " + playerSelection + ". computer selection is " + computerSelection);
    if (playerSelection === computerSelection) {
        console.log(`No points given. The score is human: ${playerScore}. computer: ${computerScore} `);
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        console.log("human wins");
        playerScore++;
    } else {
        console.log("computer wins");
        computerScore++;
    }
    console.log(`The score is human: ${playerScore}. computer: ${computerScore} `);

    console.log(playerScore > computerScore ? "Human won" : playerScore === computerScore ? "It's a draw" : "computer won");
    console.log("Thank you for playing!");
}

function setupGame() {
    buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            playerSelection = event.target.textContent;
            playRound(playerSelection);
        });
    });

    const humanScore = document.createElement('div');
    const computerScore = document.createElement('div');
    const roundWinnerName = document.createElement('div');
    const winner = document.createElement('div');

    humanScore.textContent = "Your score: ";
    computerScore.textContent = "Computer score:";
    roundWinnerName.textContent = "placeholder";
    winner.textContent = "placeholder";

    document.body.appendChild(humanScore);
    document.body.appendChild(computerScore);
    document.body.appendChild(roundWinnerName);
    document.body.appendChild(winner);


}



function game() {
    setupGame();
    while (playerScore < 5 && computerScore < 5) { }

}


game();




