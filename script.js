function getCompChoice()
{
    const moves = ["Rock", "Paper", "Scissor"];
    index = Math.floor(Math.random() * 3);
    return moves[index];
}

function playRound(playerSelection, compSelection)
{
    if (playerSelection.toLowerCase() === compSelection.toLowerCase())
    {
        return "Draw";
    }
    else if (playerSelection.toLowerCase() === "scissor")
    {
        if (compSelection === "Rock")
        {
            return "You lose";
        }
        else 
        {
            return "You win";
        }
    }
    else if (playerSelection.toLowerCase() === "rock")
    {
        if (compSelection === "Scissor")
        {
            return "You win";
        }
        else 
        {
            return "You lose";
        }
    }
    else
    {
        if (compSelection === "Scissor")
        {
            return "You lose";
        }
        else
        {
            return "You win";
        }
    }
}

function game(playerSelection, compSelection)
{
    let i = 0;
    let playerWins = 0;
    let compWins = 0;

    while (i < 5)
    {
        if (playerWins === 3)
        {
            return "You are the winner";
        }
        else if (compWins === 3)
        {
            return "You are the loser";
        }

        winner = playRound(playerSelection, compSelection);
        if (winner.toLowerCase() === "you lose")
        {
            compWins++;
        }
        else if (winner.toLowerCase() === "you win")
        {
            playerWins++;
        }
        else
        {
            continue;
        }

        i++;
    }
}

const compSelection = getCompChoice();
let playerSelection = prompt("Choose rock, paper or scissor: ");

console.log(game(playerSelection, compSelection));