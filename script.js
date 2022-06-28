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
function playerPlay(){
  let playerSelection = -1;
  let userinput = prompt("What do you want to play?");
  switch (userinput.toLowerCase()) {
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

function displayResult(difference){
  if(difference>0){
    console.log("Player wins best of 5!");
  }
  else if (difference < 0){
    console.log("Computer wins best of 5!");
  }
  else{
    console.log("Draw of best of 5!");
  }
}

function game(){
  let playerScore = 0, computerScore = 0;
  for(let i=0;i<5;i++){
    let outcome = playRound(playerPlay(), computerPlay());
    switch (outcome) {
      case 1:
        playerScore++;
        console.log("Player Wins Round!");
        break;
      case 2:
        console.log("Computer Wins Round!");
        computerScore++;
        break;
      case 0:
        console.log("Draw Round!");
        playerScore++;
        computerScore++;
      default:
        continue;
    }
    console.log("Score is Player : " + playerScore + " | " + computerScore + " : Computer");
  }
  displayResult(playerScore-computerScore);
}
