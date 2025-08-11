function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choice[randomChoice];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let human = prompt("paper, rock, scissors").trim().toLowerCase();
  if ([human === "paper" || human === "rock" || human === "scissors"]) {
    return human;
  } else {
    alert("غير صحيح يرجى ادخال مره ثانيه");
    return getHumanChoice();
  }
}
console.log(getHumanChoice());
const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();

function playRound(humanSelect, computerSelect) {
  if (humanSelect === computerSelect) {
    alert("draw");
    return "draw";
  }

  if (
    (humanSelect === "rock" && computerSelect === "scissors") ||
    (humanSelect === "scissors" && computerSelect === "paper") ||
    (humanSelect === "paper" && computerSelect === "rock")
  ) {
    alert("win");
    return "win";
  } else {
    alert("lose");
    return "lose";
  }
}
console.log(playRound());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0;

  for (let i = 0; i <= 5; i++) {
    const result = playRound(getHumanChoice(), getComputerChoice());
    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;

      rounds++;
    }
  }
  alert(`${humanScore} - ${computerScore}`);
  while (true) {
    playGame();
    let again = prompt(" yes/noهل تريد لعب مره اخرى");
    if (again !== "yes") {
      alert("شكرا للعب مره اخرى");
      break;
    }
  }
}

console.log(playGame());
