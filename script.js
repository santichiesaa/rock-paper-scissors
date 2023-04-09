// Create an array with three options: Rock, Paper and Scissors
// Choose one of the options randomly
// Return the option
document.addEventListener("DOMContentLoaded", function () {
  let options = ["Rock", "Paper", "Scissors"];
  let computerScore = 0;
  let playerScore = 0;
  let textToShow = "";
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const result = document.getElementById("result");
  const player = document.getElementById("player-score");
  const computer = document.getElementById("computer-score");

  // After each round, if either computer or player wins they get +1 score
  function updateScore(result) {
    if (result === "There is a tie!") return;
    if (
      result === "You won! Paper beats Rock" ||
      result === "You won! Scissors beats Paper" ||
      result === "You won! Rock beats Scissors"
    ) {
      playerScore++;
      player.textContent = playerScore;
    }
    if (
      result === "You lost! Rock beats Scissors" ||
      result === "You lost! Paper beats Rock" ||
      result === "You lost! Scissors beats Paper"
    ) {
      computerScore++;
      computer.textContent = computerScore;
    }
  }
  function resetScores() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
  }

  function game() {
    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        result.textContent = "You won the game!";
      } else {
        result.textContent = "You lost the game!";
      }
      resetScores();
    }
  }

  function playRound(computerSelection, playerSelection) {
    let index = Math.floor(Math.random() * options.length);
    let textToShow = "";
    if (computerSelection == playerSelection) {
      textToShow = "There is a tie!";
    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
      textToShow = "You won! Paper beats Rock";
      updateScore(textToShow);
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
      textToShow = "You won! Scissors beats Paper";
      updateScore(textToShow);
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
      textToShow = "You won! Rock beats Scissors";
      updateScore(textToShow);
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
      textToShow = "You lost! Rock beats Scissors";
      updateScore(textToShow);
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
      textToShow = "You lost! Paper beats Rock";
      updateScore(textToShow);
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
      textToShow = "You lost! Scissors beats Paper";
      updateScore(textToShow);
    }
    result.textContent = textToShow;
    game();
  }

  rock.addEventListener("click", function () {
    let computerSelection =
      options[Math.floor(Math.random() * options.length)].toUpperCase();
    playRound(computerSelection, "ROCK");
  });

  paper.addEventListener("click", function () {
    let computerSelection =
      options[Math.floor(Math.random() * options.length)].toUpperCase();
    playRound(computerSelection, "PAPER");
  });

  scissors.addEventListener("click", function () {
    let computerSelection =
      options[Math.floor(Math.random() * options.length)].toUpperCase();
    playRound(computerSelection, "SCISSORS");
  });
});
