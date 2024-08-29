function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (0 === choice) {
        return "rock";
    }
    else if (1 === choice) {
        return "paper";
    }
    else if (2 === choice) {
        return "scissors";
    }
    else {
        return undefined;
    }
}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}