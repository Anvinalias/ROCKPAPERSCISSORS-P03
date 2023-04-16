function game()
    { 
    
        // play 5 rounds
        for(let i=1;i<=5;i++)

        { 
    // set initial values of score to 0 
    let computerScore = 0;
    let playerScore = 0;
    
    const ROCK= "ROCK";
    const PAPER="PAPER";
    const SCISSORS="SCISSORS";

        // let computer choose randomly
        function getComputerChoice()
            {
                console.log("Computer choose:")
             let randomChoice = Math.floor(Math.random()*3)+1;
                if (randomChoice===1)
                {   
                    return ROCK;
                }
                else if(randomChoice===2)
                {
                    return PAPER;
                }
                else
                {   
                    return SCISSORS;
                }
            }

            function playRound(playerSelection,computerSelection)
            {
                if (playerSelection==ROCK && computerSelection==ROCK)
                {
                    return("TIE! BOTH SIDE ROCK");
                }
                else if (playerSelection==ROCK && computerSelection==PAPER)
                {
                    ++computerScore;
                    return("YOU LOSE! PAPER BEATS ROCK");
                }
                else if (playerSelection==ROCK && computerSelection==SCISSORS)
                {
                    ++playerScore;
                    return("YOU WON! ROCK BEATS SCISSORS");
                }
                else if (playerSelection==PAPER && computerSelection==PAPER)
                {
                    return("TIE! BOTH SIDE PAPER");
                }
                else if (playerSelection==PAPER && computerSelection==SCISSORS)
                {
                    ++computerScore;
                    return("YOU LOSE! SCISSORS BEATS PAPER");
                }
                else if (playerSelection==PAPER && computerSelection==ROCK)
                {
                    ++playerScore;
                    return("YOU WON! PAPER BEATS ROCK");
                }
                else if (playerSelection==SCISSORS && computerSelection==ROCK)
                {
                    ++computerScore;
                    return("YOU LOSE! ROCK BEATS SCISSORS");
                }
                else if (playerSelection==SCISSORS && computerSelection==SCISSORS)
                {
                    return("TIE! BOTH SIDE SCISSORS");
                }
                else if (playerSelection==SCISSORS && computerSelection==PAPER)
                {
                    ++playerScore;
                    return("YOU WON! SCISSORS BEATS PAPER");
                }
            }


                // let player input their choice
        let playerSelection= (prompt("Select your choice among ROCK, PAPER, SCISSORS", ''));
        // make input space-insensitive.
        // make input case-insensitive by converting to uppercase.
        playerSelection=playerSelection.replace(/\s/g,'').toUpperCase();
                // print both choices
                console.log("Player choose:");
                console.log(playerSelection);
                let computerSelection=getComputerChoice();
                console.log(computerSelection);

            // get final result of the game
        function score()
        {
          if (playerScore>computerScore)
          {
            console.log("You won the game!");
          }
          else if(playerScore<computerScore)
          {      
            console.log("You lose! Computer won the game.");
          }
          else if(playerScore==computerScore)
          {
            console.log("It's a draw");
          }
        }
    }
        score();
               // playagain?
       console.log("To play again refresh or press F5");
    }
    game();