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


function playRound(playerSelection, computerSelection) {
      let comchoice = ['rock', 'paper', 'scissors'];
      playerSelection = playerChoice
      computerSelection = comchoice[Math.floor(Math.random() * comchoice.length)];
      let lose = computerSelection + ', You lose!'
      let win = computerSelection + ', You win!'
      console.log(computerSelection)
      console.log(playerSelection)
      if (playerSelection === computerSelection) {
            console.log("Draw!");
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log(lose);
            compScore++
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log(win);
            playerScore++
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log(win);
            playerScore++
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log(lose);
            compScore++
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log(lose);
            compScore++
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log(win);
            playerScore++
      } else {
            alert("that is an invalid choice");
      }
      console.log(playerScore)
      console.log(compScore)
}
// getting ahold of html elements.
const head = document.getElementById('head');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const gameSpot = document.getElementById('gameSpot');
const choiceBox = document.getElementById('choiceBox');
const playerdisp = document.getElementById('playerDisp');
const computerdisp = document.getElementById('computerChoice')
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', () => { playerChoice = "rock", playRound()});
paper.addEventListener('click', () => { playerChoice = "paper", playRound()});
scissors.addEventListener('click', () => { playerChoice = "scissors", playRound()});


// 

