
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

function decideWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "It's a tie!";
    }

    switch (userChoice) {
        case "rock":
            return ("paper" == computerChoice) ? "You lose!" : "You win!";
        case "paper":
            return ("scissors" == computerChoice) ? "You lose!" : "You win!";
        case "scissors":
            return ("rock" == computerChoice) ? "You lose!" : "You win!";
        default:
            return undefined;
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    let result = decideWinner(userChoice, computerChoice);

    console.log(result);
    console.log(`user: ${userChoice}`);
    console.log(`computer: ${computerChoice}`);
}
/*****************************************************************************/

/******************************************************************************
* Global Variables
******************************************************************************/
let UserScore = 0;
let ComputerScore = 0;
/*****************************************************************************/

/******************************************************************************
* Main Script
******************************************************************************/
playRound();
/*****************************************************************************/