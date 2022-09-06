function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "draw";

    //Rock from Player
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerCount++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++;
        return "You win! Rock beats Scissors!";
    }

    //Paper from Player
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCount++;
        return "You lose! Scissors beats Paper!";
    }

    //Scissors from Player
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCount++;
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        return "You win! Scissors beats Paper!";
    }
}

function getComputerChoice() {
    const selections = ["rock", "paper", "scissors"];
    let selectionNum = Math.floor(Math.random() * 3);

    return selections[selectionNum];
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Select rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();

        console.log("playerSelection is " + playerSelection + " and computerSelection is " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }


    let winner = "";

    if (playerCount > computerCount) {
        winner = "Player";
    } else if (playerCount < computerCount) {
        winner = "Computer";
    } else {
        winner = "Draw";
    }

    console.log("Winner : " + winner);
    console.log("PlayerScore : " + playerCount);
    console.log("ComputerScore : " + computerCount);
}

// Count variables
let playerCount = 0;
let computerCount = 0;

game();