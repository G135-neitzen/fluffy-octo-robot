function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()* choices.lenghth);
    return choices [randomIndex];
}