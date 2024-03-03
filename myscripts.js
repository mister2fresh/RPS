

/ create function getComputerChoice /

let words = ['rock',
'paper',
'scissors',]

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
    console.log(getComputerChoice(words));


let computerSelection = getComputerChoice(words);
let playerSelection = 'rOcK'.toLowerCase();

function playRound(playerSelection, computerSelection) {
    
     if (playerSelection === computerSelection) {
        alert('Tie!');
     }

     else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose! Paper covers rock!');
     }
    

     else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock crushes scissors!');
     }
        
     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper covers rock!');
     }
      
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors cut paper!');
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock crushes scissors!');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors cut paper!');
    }

    else {
        alert('I wanted to play a game');
    }
    }


console.log(playRound(playerSelection, computerSelection));
        
