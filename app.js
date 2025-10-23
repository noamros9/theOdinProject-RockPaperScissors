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

console.log(getComputerChoice() + " " + getPlayerChoice());