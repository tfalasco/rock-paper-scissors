
/******************************************************************************
* Functions
******************************************************************************/
function getComputerChoice() {
    // Get a random number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    
    // Translate the random number to a string of 'rock', 'paper', or 'scissors'
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
    let userChoice;
    
    // Loop until we get a valid choice
    while (("rock" != userChoice) &&
        ("paper" != userChoice) &&
        ("scissors" != userChoice)) {

        // Prompt the user for their choice
        userChoice = prompt("Please type 'rock', 'paper', or 'scissors'.");

        // Set to lower case to simplify future comparisons
        userChoice = userChoice.toLowerCase();
    }

    return userChoice;
}

function decideWinner(userChoice, computerChoice) {
    // Check for a tie
    if (userChoice == computerChoice) {
        return "It's a tie!";
    }

    // If not a tie, check which player won
    //     Paper beats rock
    //     Scissors beat paper
    //     Rock beats scissors
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
    let winner;
    let loser;

    // Get the contestant's choices
    // Rock, paper, scissors, shoot!!!
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    // Decide who won this round
    let result = decideWinner(userChoice, computerChoice);

    // Prepare variables for output
    // The winner's choice will be the first word of a sentence, so capitalize the first letter.
    if ("You win!" == result) {
        winner = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        loser = computerChoice;
        UserScore++;
    }
    else if ("You lose!" == result) {
        winner = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        loser = userChoice;
        ComputerScore++;
    }

    // Print the result
    console.log(`${result}`);
    if ("It's a tie!" != result) {
        console.log(`${winner} beats ${loser}.`);
    }
}

function playGame() {
    // Play five rounds
    for (let round = 0; round < 5; round++) {
        playRound();
    }

    // Print the final result
    if (UserScore > ComputerScore) {
        console.log("You did it!!! Your superior skill carried the day!")
    }
    else if (ComputerScore > ComputerScore) {
        console.log("You lost. Loser.");
    }
    else {
        console.log("It's a tie. Try harder next time.")
    }
    
    // Print the score.
    console.log(`Your score: ${UserScore}`);
    console.log(`Their score: ${ComputerScore}`);
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
playGame();
/*****************************************************************************/