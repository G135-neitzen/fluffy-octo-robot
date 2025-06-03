let humanScore = 0;
let computerScore = 0;
let gamesToPlay = 5; // Set the number of games to play

function game() {
    const buttons = document.querySelectorAll('#container button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (humanScore >= gamesToPlay || computerScore >= gamesToPlay) {
                return;
            }
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(humanChoice, computerChoice) {
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
        console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
        const finalResult = document.querySelector('#final-result');
        if (humanScore >= gamesToPlay) {
            finalResult.textContent = `You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
        } else if (computerScore >= gamesToPlay) {
            finalResult.textContent = `You lose the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
        } else {
            finalResult.textContent = `Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
        }
    }
}

game();
// This code implements a simple Rock, Paper, Scissors game where the user plays against the computer.

