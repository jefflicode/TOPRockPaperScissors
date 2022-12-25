function getComputerChoice() {
    // this function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    // variables defined in const cannot be redeclared
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper";
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let yourScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What would you choose, Rock, Paper, or Scissors?")
        if (playerSelection === null) {
            break;
        }
        let computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {
            yourScore += 1;
        } else {
            computerScore += 1;
        }
        // apparently due to how javascript programs are executed, console.log only show up after all the 5 prompts are finished
        // so I will use alert to help display the result for each round
        // alert(`Your Score is ${yourScore}`);
        // alert(`Computer Score is ${computerScore}`);
        console.log(`Your Score is ${yourScore}`);
        console.log(`Computer Score is ${computerScore}`);
    }
    if (yourScore > computerScore) {
        // alert('You Win!');
        console.log('You Win!');
    } else {
        // alert('You Lose :( Computer Wins');
        console.log('You Lose :( Computer Wins');
    }
}

game();