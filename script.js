const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

const playOneRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `It's a tie! you both chose ${playerSelection}`;
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
    return `You win! ${playerSelection} SMASHES ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
    return `You win! ${playerSelection} COVERS ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    return `You win! ${playerSelection} CUTS ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playGame = () => {
  // loop through 5 rounds of playOneRound
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter choice: Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice();
    console.log(playOneRound(playerSelection, computerSelection));
  };
}

playGame()