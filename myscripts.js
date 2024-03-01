

/ create function getComputerChoice /

let words = ['rock',
'paper',
'scissors',]

let 'rock' > 'scissors',
 'paper' > 'rock',
 'scissor' > 'paper';
 
function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

    console.log(getComputerChoice(words));



const computerSelection = getComputerChoice();
let playerSelection = prompt("What's your play?")




function playRound(playerSelection, computerSelection) {
    return 
    
  }
  
  const playerSelection = "rock";
  console.log(playRound(playerSelection, computerSelection));

