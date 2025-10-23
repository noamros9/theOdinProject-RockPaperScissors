function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function getPlayerChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    while (prompt("Should we play another round?") != "No") {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("human selection is" + " " + playerSelection + ". computer selection is " + computerSelection);
        if (playerSelection === computerSelection) {
            console.log(`No points given. The score is human: ${playerScore}. computer: ${computerScore} `);
            continue
        }
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log("human wins");
            playerScore++;
        } else {
            console.log("computer wins");
            computerScore++;
        }
        console.log(`The score is human: ${playerScore}. computer: ${computerScore} `);

    }
}

playRound();