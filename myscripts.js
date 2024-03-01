

/ create function getComputerChoice /

let words = ['rock',
'paper',
'scissors',

];
function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

    console.log(getComputerChoice(words));

/ randomly selects rock, paper, scissors /

