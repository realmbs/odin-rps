const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
let runningScore = 0;

const playOneRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `It's a tie! you both chose ${playerSelection}`;
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
    runningScore++;
    return `You win! ${playerSelection} smashes ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
    runningScore++;
    return `You win! ${playerSelection} covers ${computerSelection}`;
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    runningScore++;
    return `You win! ${playerSelection} cut ${computerSelection}`;
  } else {
    runningScore--;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const container = document.querySelector('.container');

buttonRock.addEventListener('click', () => {
  console.log(playOneRound('rock', getComputerChoice()));
  results.textContent = playOneRound('rock', getComputerChoice());
  container.appendChild(results);
  score.textContent = `Score: ${runningScore}`;
  container.appendChild(score);
});

buttonPaper.addEventListener('click', () => {
  console.log(playOneRound('paper', getComputerChoice()));
  results.textContent = playOneRound('paper', getComputerChoice());
  container.appendChild(results);
  score.textContent = `Score: ${runningScore}`;
  container.appendChild(score);
});

buttonScissors.addEventListener('click', () => {
  console.log(playOneRound('scissors', getComputerChoice()));
  results.textContent = playOneRound('scissors', getComputerChoice());
  container.appendChild(results);
  score.textContent = `Score: ${runningScore}`;
  container.appendChild(score);
});

