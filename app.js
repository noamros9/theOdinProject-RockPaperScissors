let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    const roundWinnerName = document.querySelector("#roundWinnerName");
    const roundDescription = document.querySelector('#roundDescription');
    roundDescription.textContent = `Human selection is ${playerSelection}.` +
        ` Computer selection is ${computerSelection}.`;

    if (playerSelection === computerSelection) {
        roundWinnerName.textContent = "It's a draw"
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        roundWinnerName.textContent = "Human wins current round";
        playerScore++;
        const humanScore = document.querySelector("#humanScore");
        humanScore.textContent = `Your score is: ${playerScore}`
    } else {
        roundWinnerName.textContent = "Computer wins current round";
        computerScore++;
        const computerScoreText = document.querySelector("#computerScoreText");
        computerScoreText.textContent = `Computer score is: ${computerScore}`
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;

    const humanScore = document.querySelector("#humanScore");
    humanScore.textContent = `Your score is: ${playerScore}`;
    const computerScoreText = document.querySelector("#computerScoreText");
    computerScoreText.textContent = `Computer score is: ${computerScore}`;
    const gameWinner = document.querySelector("#gameWinner");
    gameWinner.textContent = "";
    const askPlayerToRestart = document.querySelector("#askPlayerToRestart");
    askPlayerToRestart.remove();
}

function restartGameQuestion() {
    const resetGameButton = document.createElement("button");
    resetGameButton.textContent = "Reset";
    resetGameButton.addEventListener('click', restartGame);

    const askPlayerToRestart = document.createElement("div");
    askPlayerToRestart.id = "askPlayerToRestart"
    askPlayerToRestart.textContent = "Do you want to restrat the game?";
    askPlayerToRestart.appendChild(resetGameButton);
    document.body.appendChild(askPlayerToRestart);
}

function endGame() {
    const gameWinner = document.querySelector("#gameWinner");
    if (playerScore === 5) {
        gameWinner.textContent = "You won! Congrats!"
        restartGameQuestion();
    } else if (computerScore === 5) {
        gameWinner.textContent = "Computer won!"
        restartGameQuestion();
    }
}


function setupGame() {
    buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            playerSelection = event.target.textContent;
            playRound(playerSelection);
            endGame();
        });
    });

    const roundDescription = document.createElement('div');
    roundDescription.id = "roundDescription";
    roundDescription.textContent = "Welcome to rock-paper-scissors! Push a button to start the game!";

    const humanScore = document.createElement('div');
    humanScore.id = "humanScore";
    humanScore.textContent = `Your score: ${playerScore}`;

    const computerScoreText = document.createElement('div');
    computerScoreText.id = "computerScoreText";
    computerScoreText.textContent = `Computer score: ${computerScore}`;

    const roundWinnerName = document.createElement('div');
    roundWinnerName.id = "roundWinnerName"
    roundWinnerName.textContent = "";

    const gameWinner = document.createElement('div');
    gameWinner.id = "gameWinner"
    gameWinner.textContent = "";

    document.body.appendChild(roundDescription);
    document.body.appendChild(roundWinnerName);
    document.body.appendChild(humanScore);
    document.body.appendChild(computerScoreText);
    document.body.appendChild(gameWinner);
}


function main() {
    setupGame();
}

main();




