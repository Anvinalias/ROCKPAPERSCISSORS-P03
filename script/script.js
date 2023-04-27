let userScore = 0;
let computerScore = 0;
let liveResult = document.querySelector('.live-result');
let userPoint_span = document.querySelector('.user-point');
let computerPoint_span = document.querySelector('.computer-point');
let rock = document.querySelector('.choice1')
let paper = document.querySelector('.choice2')
let scissors = document.querySelector('.choice3')
let result = document.querySelector('.result');
let playAgain = document.querySelector('.play-again')

function getComputerChoice() {
    // let computer pick a random choice
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function game(userChoice) {
    if(userScore < 5 && computerScore < 5){
        
    let computerChoice = getComputerChoice();
    liveResult.textContent = playRound(userChoice, computerChoice)
    userPoint_span.textContent = userScore;
    computerPoint_span.textContent = computerScore;
    if(userScore >=5 || computerScore >= 5)
    {
        result.textContent = endGame();
        playAgain.textContent = "PRESS F5 TO PLAYAGAIN"       
    }
}
else {
    return "thanks for playing";
}
}

function main(){
    rock.addEventListener('click', function(){
        game("ROCK");
    });
    paper.addEventListener('click', function(){
        game("PAPER");
    });
    scissors.addEventListener('click', function(){
        game("SCISSORS");
    });
}

main();

// compare both choices, print outcome and increment score accordingly
function playRound(userChoice, computerChoice) {

    if (userChoice == 'ROCK' && computerChoice == 'ROCK') {
        return ("TIE! BOTH SIDE ROCK");
    }
    else if (userChoice == 'ROCK' && computerChoice == 'PAPER') {
        computerScore++;
        return ("YOU LOSE! PAPER BEATS ROCK");
    }
    else if (userChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        userScore++;
        return ("YOU WON! ROCK BEATS SCISSORS");
    }
    else if (userChoice == 'PAPER' && computerChoice == 'PAPER') {
        return ("TIE! BOTH SIDE PAPER");
    }
    else if (userChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        computerScore++;
        return ("YOU LOSE! SCISSORS BEATS PAPER");
    }
    else if (userChoice == 'PAPER' && computerChoice == 'ROCK') {
        userScore++;
        return ("YOU WON! PAPER BEATS ROCK");
    }
    else if (userChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        computerScore++;
        return ("YOU LOSE! ROCK BEATS SCISSORS");
    }
    else if (userChoice == 'SCISSORS' && computerChoice == 'SCISSORS') {
        return ("TIE! BOTH SIDE SCISSORS");
    }
    else if (userChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        userScore++;
        return ("YOU WON! SCISSORS BEATS PAPER");
    }
}

// get final result of the game
function endGame() {
    if (userScore > computerScore) {
        return ("You won the game!");
    }
    else if (userScore < computerScore) {
       return("You lose! Computer won the game.");
    }
    else if (userScore == computerScore) {
       return("It's a draw");
    }
}





