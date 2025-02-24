let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) { 
        return "rock";
    } else if (choice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}



function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        return "You win! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        return "You lose! Scissors beats Paper";
    } else if (humanChoice === "paper" && computerChoice === "paper"){
        return"It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        return "It's a tie!";
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore ++;
        return "You win! Scissors beats Paper";
    } else if (humanChoice === "scissors"  && computerChoice === "rock"){
        computerScore ++;
        return "You lose! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        return "It's a tie!";
    }
}

function playGame () {
    console.log("Welcome to Rock-Paper-Scissors! Best of 5 rounds!")

    for (let i = 1; i <= 5; i ++) {
        console.log(`Round ${i}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("Final Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();