let humanScore = 0;
let computerScore = 0;
let choice;
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices [randomIndex];
}
function getHumanChoice(){
    choice = prompt("Enter rock, paper, or scissors").toLowerCase();
    return choice;
}

function game(){
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

game();
// This code implements a simple Rock, Paper, Scissors game where the user plays against the computer.

