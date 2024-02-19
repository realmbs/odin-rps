const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');

const playOneRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `It's a tie! you both chose ${playerSelection}`;
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
    return `You win! ${playerSelection} smashes ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
    return `You win! ${playerSelection} covers ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    return `You win! ${playerSelection} cut ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

buttonRock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(playOneRound('rock', computerSelection));
});

buttonPaper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(playOneRound('paper', computerSelection));
});

buttonScissors.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  console.log(playOneRound('scissors', computerSelection));
});