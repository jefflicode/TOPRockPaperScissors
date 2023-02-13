function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

function getComputerChoice() {
  // this function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  // variables defined in const cannot be redeclared
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "It's a tie!";
  }
}

const displayResult = document.querySelector(".DisplayResult");
displayResult.textContent = "Result:";
// displayResult.innerHTML += '<br>Hello';

let yourScore = 0;
let computerScore = 0;

const your_Score = document.querySelector(".YourScore");
const computer_Score = document.querySelector(".ComputerScore");

const rock = document.querySelector(".Rock");
rock.addEventListener("click", () => {
  const result = playRound("Rock", getComputerChoice());
  if (result === "You Win! Rock beats Scissors") {
    yourScore += 1;
  } else if (result === "You Lose! Paper beats Rock") {
    computerScore += 1;
  }
  your_Score.textContent = `Your Score:${yourScore}`;
  computer_Score.textContent = `Computer Score:${computerScore}`;

  if (yourScore == 5) {
    displayResult.textContent = "Result: You Win! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else if (computerScore == 5) {
    displayResult.textContent = "Result: The Computer Wins! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else {
    displayResult.innerHTML += `<br>${result}`;
  }
});

const paper = document.querySelector(".Paper");
paper.addEventListener("click", () => {
  const result = playRound("Paper", getComputerChoice());
  if (result === "You Win! Paper beats Rock") {
    yourScore += 1;
  } else if (result === "You Lose! Scissors beats Paper") {
    computerScore += 1;
  }
  your_Score.textContent = `Your Score:${yourScore}`;
  computer_Score.textContent = `Computer Score:${computerScore}`;

  if (yourScore == 5) {
    displayResult.textContent = "Result: You Win! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else if (computerScore == 5) {
    displayResult.textContent = "Result: The Computer Wins! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else {
    displayResult.innerHTML += `<br>${result}`;
  }
});

const scissors = document.querySelector(".Scissors");
scissors.addEventListener("click", () => {
  const result = playRound("Scissors", getComputerChoice());
  if (result === "You Win! Scissors beats Paper") {
    yourScore += 1;
  } else if (result === "You Lose! Rock beats Scissors") {
    computerScore += 1;
  }
  your_Score.textContent = `Your Score:${yourScore}`;
  computer_Score.textContent = `Computer Score:${computerScore}`;

  if (yourScore == 5) {
    displayResult.textContent = "Result: You Win! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else if (computerScore == 5) {
    displayResult.textContent = "Result: The Computer Wins! Game Restarts In 10 Seconds";
    window.onload = timedRefresh(10000);
  } else {
    displayResult.innerHTML += `<br>${result}`;
  }
});

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// For now, remove the logic that plays exactly five rounds.
// function game() {
//     let yourScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("What would you choose, Rock, Paper, or Scissors?")
//         if (playerSelection === null) {
//             break;
//         }
//         let computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection);
//         if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {
//             yourScore += 1;
//         } else {
//             computerScore += 1;
//         }
//         // apparently due to how javascript programs are executed, console.log only show up after all the 5 prompts are finished
//         // so I will use alert to help display the result for each round
//         // alert(`Your Score is ${yourScore}`);
//         // alert(`Computer Score is ${computerScore}`);
//         console.log(`Your Score is ${yourScore}`);
//         console.log(`Computer Score is ${computerScore}`);
//     }
//     if (yourScore > computerScore) {
//         // alert('You Win!');
//         console.log('You Win!');
//     } else {
//         // alert('You Lose :( Computer Wins');
//         console.log('You Lose :( Computer Wins');
//     }
// }

// game();
