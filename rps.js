function game() {
      let i = 1
      while (i < 6, i++) {
            if (i > 6) {
                  prompt('would you like to play again')
            } else {
                  playRound()
            }
      }
}


function playRound(playerSelection, computerSelection) {
      playerSelection = window.prompt("pick rock, paper or scissors.").toLowerCase();
      let comchoice = ['rock', 'paper', 'scissors'];
      computerSelection = comchoice[Math.floor(Math.random() * comchoice.length)];
      let lose = computerSelection + ', You lose!'
      let win = computerSelection + ', You win!'
      console.log(computerSelection)
      if (playerSelection === computerSelection) {
            alert("Draw!");
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert(lose);
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            alert(win);
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert(win);
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            alert(lose);
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            alert(lose);
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            alert(win);
      } else {
            alert("that is an invalid choice");
      }
}
// getting ahold of html elements.
const head = document.getElementById('head');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const gameSpot = document.getElementById('gameSpot');
const choiceBox = document.getElementById('choiceBox');
const playerdisp = document.getElementById('playerChoice');
const computerdisp = document.getElementById('computerChoice')
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', playRound(), () => {playerSelection = "rock"});
