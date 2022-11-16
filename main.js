let possibleOptions = ['rock', 'paper', 'scissors']; //made everything lowercase because it's easier

function computerPlay() {
    return possibleOptions[Math.floor(Math.random()*possibleOptions.length)]; //i.e. pick's a random index of the array between 0 and 2
}

let playerWins, computerWins; 
function playRound(playerSelection, computerSelection) {

    if (possibleOptions.indexOf(playerSelection) == -1) {
        playerWins = false;
        computerWins = false;
        return "Invalid input! You have to pick Rock, Paper or Scissors!";
    }

    inputPlayer.textContent = "You picked: " + playerSelection + "\n"
    inputComputer.textContent = "The computer picked: " + computerSelection;
    if (playerSelection == "rock" && computerSelection == "scissors") {

        playerWins = true;
        computerWins = false;
        results.textContent = "You win! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        playerWins = false;
        computerWins = true;
        results.textContent = "You lose! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        playerWins = true;
        computerWins = false;
        results.textContent = "You win! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        playerWins = false;
        computerWins = true;
        results.textContent = "You lose! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        playerWins = true;
        computerWins = false;
        results.textContent = "You win! Paper beats Rock";

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        playerWins = false;
        computerWins = true;
        results.textContent = "You lose! Paper beats Rock";

    } else { // i.e. playerSelection === computerSelection

        playerWins = false;
        computerWins = false;
        results.textContent = "Draw! You both picked " + playerSelection[0].toUpperCase() + playerSelection.slice(1); //only doing this for styling (want it to be consistently capitalised)

    }
}

/*
let handsWon = 0, computerHandsWon = 0;
    for (round = 1; round <= 5; round++) { //iterates through 5 rounds
        if (playerWins) {
            handsWon++;
        } else if (computerWins) {
            computerHandsWon++;
        }
        //if they're both false it's a draw, neither gets a point 
    }
    final.textContent = `You won ${handsWon} rounds, whereas the computer won ${computerHandsWon}. There were ${5 - handsWon - computerHandsWon} draws.`;
    if (handsWon > computerHandsWon) {
        win.textContent = "You win overall!";
    } else {
        lose.textContent = "You lose overall! Better luck next time!";
    }
*/

let handsWon = 0, computerHandsWon = 0, rounds = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (rounds < 5){
            playRound(button.id, computerPlay());
            if (playerWins) {
                handsWon++;
                playerwon.textContent = `You won ${handsWon} rounds`; 
            } else if (computerWins) {
                computerHandsWon++;
                computerwon.textContent = `The computer won ${computerHandsWon} rounds`;
            } 
            rounds++;
        };
        if (handsWon > computerHandsWon && rounds == 5) {
            player_result.textContent = "You win overall!";
            
        } else if (handsWon < computerHandsWon && rounds == 5){
            computer_result.textContent = "You lose overall! Better luck next time!";
        } else if (handsWon == computerHandsWon && rounds == 5) {
            tie.textContent = "It's a tie";
    };
  });
 });




