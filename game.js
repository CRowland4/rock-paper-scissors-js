// TODO remove the individual event listeners in place of a bubbling event
let humanScore = 0;
let computerScore = 0;

function main() {
    addHumanSelectionEventListeners();
}


function addHumanSelectionEventListeners() {
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", (event) => {
        const humanChoice = event.target.id;
        playRound(humanChoice, getComputerChoice());
    });

    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", (event) {
        const humanChoice = event.target.id;
        playRound(humanChoice, getComputerChoice())
    });

    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", (event) => {
        const humanChoice = event.target.id;
        playRound(humanChoice, getComputerChoice());
    });

    return;
}


function playRound(humanChoice, computerChoice) {
    const roundWinMessage = `You win - ${humanChoice} beats ${computerChoice}!`;
    const roundLoseMessage = `You lose - ${humanChoice} loses to ${computerChoice}!`;
    const roundTieMessage = "Tie!";

    const roundMessageTag = document.querySelector("#roundMessage");

    if (humanChoice == "rock" && computerChoice == "rock") {
        updateRoundMessage(roundTieMessage);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        updateRoundMessage(roundTieMessage);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        updateRoundMessage(roundTieMessage);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        updateRoundMessage(roundLoseMessage);
        incrementComputerScore();
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        updateRoundMessage(roundWinMessage);
        incrementHumanScore();
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        updateRoundMessage(roundLoseMessage);
        incrementComputerScore();
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        updateRoundMessage(roundWinMessage);
        incrementHumanScore();
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        updateRoundMessage(roundLoseMessage);
        incrementComputerScore();
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        updateRoundMessage(roundWinMessage);
        incrementHumanScore();
    } else {
        message = `Unexpected choices - Computer: ${computerChoice}, Human: ${humanChoice}`;
        throw new Error(message);
    }

    const humanScore = Number(document.querySelector("#humanScore").textContent);
    const computerScore = Number(document.querySelector("#computerScore").textContent);

    if ((humanScore === 5) || (computerScore === 5)) {
        announceWinner();
        disableHumanSelectionButtons();
        addNewGameButton();
    }

    return;
}


function announceWinner(humanScore, computerScore) {
    let gameEndMessage = "";
    if (humanScore > computerScore) {
        gameEndMessage = 
    }
}


function disableHumanSelectionButtons() {
    // TODO
}


function addNewGameButton() {
    // TODO
}


function incrementHumanScore() {
    const humanScoreTag = document.querySelector("#humanScore");

    const currentHumanScore = Number(humanScoreTag.textContent);
    humanScoreTag.textContent = currentHumanScore + 1;
    return;
}


function incrementComputerScore() {
    const computerScoreTag = document.querySelector("#computerScore");
    
    const currentComputerScore = Number(computerScoreTag.textContent);
    computerScoreTag.textContent = currentComputerScore + 1;
    return;
}


function updateRoundMessage(message) {
    const roundMessageTag = document.querySelector("#roundMessage");
    updateRoundMessage(message);
    return;
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








// This was the original
// playGame();


function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

  

    return
}

