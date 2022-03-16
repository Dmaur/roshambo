// function game() {
//       let i = 1
//       while (i < 6, i++) {
//             if (i > 6) {
//                   prompt('would you like to play again')
//             } else {
//                   playRound()
//             }
//       }
// }

let playerScore = 0
let compScore = 0
let roundWinner = ""
let gameOver = false


function playRound(playerSelection, computerSelection) {
      let comchoice = ['rock', 'paper', 'scissors'];
      playerSelection = playerChoice
      computerSelection = comchoice[Math.floor(Math.random() * comchoice.length)];
      console.log(computerSelection)
      console.log(playerSelection)
      if (playerSelection === computerSelection) {
            roundWinner = 'tie'
      }
      if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
            playerScore++
            roundWinner = 'player'
            console.log(playerScore, "p")
      }
      if (
            (computerSelection === 'rock' && playerSelection === 'scissors') ||
            (computerSelection === 'scissors' && playerSelection === 'paper') ||
            (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
            compScore++
            roundWinner = 'computer'
            console.log(compScore, "c")
      }
      

// getting ahold of html elements.
const head = document.getElementById('head');
const buttonBox = document.getElementById("buttonBox");
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// using buttons to get user input then trigger a round of the game
rock.addEventListener('click', () => {
      playerChoice = "rock";
      if (playerScore == 5 || compScore == 5) {
            if (playerScore < compScore){
                  alert(<button onClick="window.location.reload();"> You lose, play again?</button>)
            }else {
                  alert(<button onClick="window.location.reload();">You win! Play again?</button>)
            }
      } else {
            playRound();


      }
});
paper.addEventListener('click', () => {
      playerChoice = "paper";
      if (playerScore == 5 || compScore == 5) {
            if (playerScore < compScore){
                  alert(<button onClick="window.location.reload();"> You lose, play again?</button>)
            }else {
                  alert(<button onClick="window.location.reload();">You win! Play again?</button>)
            }
      } else {
            playRound();
      }
});
scissors.addEventListener('click', () => {
      playerChoice = "scissors";
      if (playerScore == 5 || compScore == 5) {
            if (playerScore < compScore){
                  alert(<button onClick="window.location.reload();"> You lose, play again?</button>)
            }else {
                  alert(<button onClick="window.location.reload();">You win! Play again?</button>)
            }
      } else {
            playRound();
      }
});



