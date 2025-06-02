let humanScore = 0;
let computerScore = 0;
let gamesToPlay = 5; // Set the number of games to play

function getHumanChoice(){
    const buttons = document.querySelectorAll('#container button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let choice = button.id;
            console.log(`You chose: ${choice}`);
            return choice;
        });
    });

}
function game(){
    for (let i = 0; i < gamesToPlay; i++) {
        const humanChoice = getHumanChoice();

        function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random()* choices.length);
        return choices [randomIndex];
        }
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    const finalResult = document.querySelector('#final-result');
    if (humanScore > computerScore) {
        finalResult.textContent = `You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    } else if (computerScore > humanScore) {
        finalResult.textContent = `You lose the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    } else {
        finalResult.textContent = `It's a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }

}

function playRound(humanChoice, computerChoice){
    const result = document.querySelector('#result-text');
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
        result.textContent = `It's a tie! You both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
}

game();
// This code implements a simple Rock, Paper, Scissors game where the user plays against the computer.

