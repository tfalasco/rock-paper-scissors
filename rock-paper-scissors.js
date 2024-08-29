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

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}