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