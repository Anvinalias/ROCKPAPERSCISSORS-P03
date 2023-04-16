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
                    return("YOU LOSE! PAPER BEATS ROCK");
                }
                else if (playerSelection==ROCK && computerSelection==SCISSORS)
                {
                    return("YOU WON! ROCK BEATS SCISSORS");
                }
                else if (playerSelection==PAPER && computerSelection==PAPER)
                {
                    return("TIE! BOTH SIDE PAPER");
                }
                else if (playerSelection==PAPER && computerSelection==SCISSORS)
                {
                    return("YOU LOSE! SCISSORS BEATS PAPER");
                }
                else if (playerSelection==PAPER && computerSelection==ROCK)
                {
                    return("YOU WON! PAPER BEATS ROCK");
                }
                else if (playerSelection==SCISSORS && computerSelection==ROCK)
                {
                    return("YOU LOSE! ROCK BEATS SCISSORS");
                }
                else if (playerSelection==SCISSORS && computerSelection==SCISSORS)
                {
                    return("TIE! BOTH SIDE SCISSORS");
                }
                else if (playerSelection==SCISSORS && computerSelection==PAPER)
                {
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

                // function call and argument passing
        console.log(playRound(playerSelection,computerSelection));  