let playerScore = 0, computerScore = 0;

const body = document.querySelector('body');
const playButtonList = document.querySelectorAll('button');
playButtonList.forEach(button => {button.addEventListener('click', start)});



function start(e){
  let playerSelection = playerPlay(e.target.name);
  let outcome = playRound(playerSelection, computerPlay());
  tallyScore(outcome);
  displayCurrentScore(outcome);
  if (gameFinished()){
    displayResult();
    resetScore();
    displayCurrentScore();
  }
}



function randomNumberGenerator(){
  return Math.floor(Math.random() * 3);
}


//function returns choice computer has made
function computerPlay(){
  //Rock = 0, Paper = 1, Scissors = 2
  let randomNumber = randomNumberGenerator();
  return randomNumber;
}


//function returns choice player has made, and -1 if error
function playerPlay(buttonInput){
  let playerSelection = -1;
  //let userinput = prompt("What do you want to play?");
  switch (buttonInput) {
    case "rock":
      playerSelection = 0;
      break;
    case "paper":
      playerSelection = 1;
      break;
    case "scissors":
      playerSelection = 2;
      break;
    default:
      alert("Invalid input detected");
      return -1;
  }
  return playerSelection;
}


//function plays a single round of rock paper scissors
//0 = draw, 1 = playerWin, 2 = compWin
function playRound(playerSelection, computerSelection){
  if(playerSelection < 0){
    return -1;
  }
  let outcome = 0;
  switch (playerSelection) {
    case 0:
      switch (computerSelection) {
        case 0:
          outcome = 0;
        break;
        case 1:
          outcome = 2;
        break;
        default:
          outcome = 1;
      }
    break;


    case 1:
      switch (computerSelection) {
        case 0:
          outcome = 1;
        break;
        case 1:
          outcome = 0;
        break;
        default:
          outcome = 2;
      }
    break;


    default:
      switch (computerSelection) {
        case 0:
          outcome = 2;
        break;
        case 1:
          outcome = 1;
        break;
        default:
          outcome = 0;
      }
  }

  return outcome;
}

function displayCurrentScore(outcome){
  const roundOutcomeDisplay = document.createElement('div');
  const scoreDisplay = document.createElement('div');
  const playerDisplay = document.createElement('div');
  const computerDisplay = document.createElement('div');

  playerDisplay.innerHTML = "Player Score: " + playerScore;
  computerDisplay.innerHTML = "Computer Score: " + computerScore;

  if(outcome == 1) roundOutcomeDisplay.innerHTML = "Player won round!";
  if(outcome == 2) roundOutcomeDisplay.innerHTML = "Computer won round!";
  if(outcome == 0) roundOutcomeDisplay.innerHTML = "Draw!";

  scoreDisplay.appendChild(roundOutcomeDisplay);
  scoreDisplay.appendChild(playerDisplay);
  scoreDisplay.appendChild(computerDisplay);

  body.appendChild(scoreDisplay);

  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
}

function resetScore(){
  playerScore = 0;
  computerScore = 0;
}

function displayResult(){
  const resultDisplay = document.createElement('div');


  if (playerScore > computerScore) resultDisplay.innerHTML = "Player wins best of 5!";
  else if (playerScore < computerScore) resultDisplay.innerHTML = "Computer wins best of 5!";
  else resultDisplay.innerHTML = "Draw!";

  body.appendChild(resultDisplay);
}

function gameFinished(){
  if(playerScore >=5 || computerScore >= 5) return true;
  return false;
}

function tallyScore(outcome){
  if (outcome == 0){
    playerScore++;
    computerScore++;
  }
  else if(outcome == 1){
    playerScore++;
  }
  else if (outcome == 2){
    computerScore++;
  }
}
