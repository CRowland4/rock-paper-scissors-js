// TODO remove the individual event listeners in place of a bubbling event
main();


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
    paperButton.addEventListener("click", (event) => {
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
        announceWinner(humanScore, computerScore);
        disableHumanSelectionButtons();
        addNewGameButton();
    }

    return;
}


function announceWinner(humanScore, computerScore) {
    let gameEndMessage = "";
    if (humanScore > computerScore) {
        gameEndMessage = `You won the game ${humanScore} to ${computerScore}!`;
    } else {
        gameEndMessage = `You lost the game ${humanScore} to ${computerScore}!`;
    }

    const resultsBox = document.querySelector("#results");
    const winnerAnnouncement = document.createElement("h1");
    winnerAnnouncement.id = "winnerAnnouncement";
    winnerAnnouncement.textContent = gameEndMessage;

    resultsBox.appendChild(winnerAnnouncement);
    return;
}


function disableHumanSelectionButtons() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    return;
}


function addNewGameButton() {
    const newGameButton = document.createElement("button");
    newGameButton.id = "newGame";
    newGameButton.textContent = "Start New Game";
    newGameButton.addEventListener("click", () => {
        document.location.reload();
    })

    const resultsBox = document.querySelector("#results");
    resultsBox.appendChild(newGameButton);
    return;

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
    roundMessageTag.textContent = message;
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
