playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        const winMessage = `You win - ${humanChoice} beats ${computerChoice}!`;
        const loseMessage = `You lose - ${humanChoice} loses to ${computerChoice}!`;
        const tieMessage = "Tie!";
    
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log(tieMessage);
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log(tieMessage);
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log(tieMessage);
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log(loseMessage);
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log(winMessage);
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log(loseMessage);
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log(winMessage);
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log(loseMessage);
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log(winMessage);
            humanScore++;
        } else {
            message = `Unexpected choices - Computer: ${computerChoice}, Human: ${humanChoice}`;
            throw new Error(message);
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game ${humanScore} to ${computerScore}!`);
    } else {
        console.log(`The game was tied ${humanScore} to ${computerScore}!`);
    }

    return
}



function getComputerChoice() {
    let number = Math.floor((Math.random() * 3) + 1);

    if (number == 1) {
        return "rock";
    } else if (number == 2) {
        return "paper";
    } else if (number == 3) {
        return "scissors";
    } else {
        throw new Error(`Unexpected random number generated: ${number}`);
    }
}

function getHumanChoice() {
    let choice = prompt('Enter "rock", "paper", or "scissors": ');
    return choice;
}
