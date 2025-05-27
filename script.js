function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices [randomIndex];
}
let choice;
function getHumanChoice(){
    choice = prompt("Enter rock, paper, or scissors").toLowerCase();
}
console.log(getHumanChoice());
console.log(`You chose: ${choice}`);