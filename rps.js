function game() {
      let i = 1
      while (i < 6, i++) {
            if (i > 6) {
                  prompt('would you like to play aga')
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