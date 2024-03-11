

/ create function getComputerChoice /

let words = ['rock',
'paper',
'scissors',]

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
    console.log(getComputerChoice(words));


let computerSelection = getComputerChoice(words);
let playerSelection = window.prompt('What is your play?').toLowerCase();
let playerScore = 0;
let compScore = 0;



function playRound(playerSelection, computerSelection) {
    
     if (playerSelection === computerSelection) {
        console.log('Tie!');
     }

     else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        console.log('You lose! Paper covers rock!');
     }
    

     else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        console.log('You win! Rock crushes scissors!');
     }
        
     else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        console.log('You win! Paper covers rock!');
     }
      
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        console.log('You lose! Scissors cut paper!');
    }
    
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        console.log('You lose! Rock crushes scissors!');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log('You win! Scissors cut paper!');
    }

    else {
        console.log('I wanted to play a game. Please enter "rock", "paper", or "scissors".');
    }
    }


console.log(playRound(playerSelection, computerSelection));


/ playRound until computer or player reaches 5 points /

        function playGame() {
            for (let i = 0; i < 5; i++) {
                let computerSelection = getComputerChoice(words);
                let playerSelection = window.prompt('What is your play?').toLowerCase();
                playRound(playerSelection, computerSelection);
            }
        
            console.log('Game Over!');
            console.log('Player Score:', playerScore);
            console.log('Computer Score:', compScore);
        
            if (playerScore > compScore) {
                console.log('You win the game!');
            } else if (compScore > playerScore) {
                console.log('You lose the game!');
            } else 
                console.log('Draw')
        }
        
        playGame();
        


  
 

