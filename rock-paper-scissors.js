
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

function playRound(userChoice) {
    let winner;
    let loser;
    let returnString = "";

    // Get the contestant's choices
    // Rock, paper, scissors, shoot!!!
    let computerChoice = getComputerChoice();

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

    // Create the result string
    returnString = result;
    if ("It's a tie!" != result) {
        returnString += ` ${winner} beats ${loser}.`;
    }
    console.log(returnString);

    return returnString;
}

function showScore() {
    const playerScore = document.querySelector("#playerScore");
    playerScore.textContent = UserScore;
    const computerScore = document.querySelector("#computerScore");
    computerScore.textContent = ComputerScore;
    
    const results = document.querySelector("#results");

    const winner = checkForWin();
    if (undefined !== winner) {
        // There was a winner.  Print the results
        const finalResult = document.createElement("p");
        if ("user" === winner) {
            finalResult.textContent = "You did it!!! Your superior skill carried the day!";
        }
        else if ("computer" === winner) {
            finalResult.textContent = "You lost. Loser.";
        }
        results.appendChild(finalResult);

        // Disable game buttons
        const buttons = btnArray.querySelectorAll("button");
        for (btn of buttons) {
            btn.disabled = true;
        }

        // Add a reset button
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Reset";
        resetBtn.classList.add("gameBtn");
        resetBtn.classList.add("resetBtn");
        resetBtn.addEventListener("click", () => {
            // Reset scores
            UserScore = 0;
            ComputerScore = 0;

            // Reenable game buttons
            for (btn of buttons) {
                btn.disabled = false;
            }

            // Remove the result string and this button now that the game is reset
            results.removeChild(finalResult);
            results.removeChild(resetBtn);

            // Clear the last round output
            const roundOutput = document.querySelector("#roundOutput");
            roundOutput.textContent = "...";

            // Reprint the score now that it has changed
            showScore();
        });
        results.appendChild(resetBtn);
    }
}

function checkForWin() {
    if (UserScore >= 5) {
        return "user";
    }
    else if (ComputerScore >= 5) {
        return "computer";
    }
    else {
        return undefined;
    }
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
// Assign event listeners to the rock, paper, and scissors buttons
// Here we are taking advantage of event bubbling to reduce the number of
// event listeners, which allegedly improves performance.
const btnArray = document.querySelector("#btnArray");
// When the button array gets a click event, which target was clicked
btnArray.addEventListener("click", function(e) {
    const roundOutput = document.querySelector("#roundOutput");
    switch (e.target.id) {
        case "rockBtn":
            roundOutput.textContent = playRound("rock");
            break;
        case "paperBtn":
            roundOutput.textContent = playRound("paper");
            break;
        case "scissorsBtn":
            roundOutput.textContent = playRound("scissors");
            break;
        default:
            console.log("Unhandled click event.");
            console.log(e);
            break;
    }

    // Update the score if the user clicked one of the buttons
    if ("btnArray" != e.target.id) {
        showScore();
    }
});

// Show the initial score
showScore();
/*****************************************************************************/