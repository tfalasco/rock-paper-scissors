
/******************************************************************************
* Functions
******************************************************************************/
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if (0 === computerChoice) {
        return "rock";
    }
    else if (1 === computerChoice) {
        return "paper";
    }
    else if (2 === computerChoice) {
        return "scissors";
    }
    else {
        return undefined;
    }
}

function getUserChoice() {
    let userChoice = prompt("Please type 'rock', 'paper', 'scissors', or 'exit'.");

    userChoice = userChoice.toLowerCase();

    if (("rock" != userChoice) &&
        ("paper" != userChoice) &&
        ("scissors" != userChoice) &&
        ("exit" != userChoice)) {
            userChoice = "exit";
    }

    return userChoice;
}
/*****************************************************************************/

/******************************************************************************
* Global Variables
******************************************************************************/
let UserScore = 0;
let ComputerScore = 0;
/*****************************************************************************/