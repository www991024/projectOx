let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", ""];
let isGameActive = true;

const winsGames = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function initGame() {
  const bxs = document.querySelectorAll(".bx");
  bxs.forEach((bx) => bx.addEventListener("click", handleBoxClick));
  document.getElementById("resetButton").addEventListener("click", resetGame);
}

function handleBoxClick(event) {
  const clickedBox = event.target;
  const clickedBoxIndex = parseInt(clickedBox.getAttribute("data-index"));

  if (!isGameActive || gameState[clickedBoxIndex] !== "") {
    return;
  }

  gameState[clickedBoxIndex] = currentPlayer;
  clickedBox.textContent = currentPlayer;

  if (checkWin()) {
    isGameActive = false;
    setTimeout(() => alert(`玩家 ${currentPlayer} 勝出!`), 100);
  } else if (!gameState.includes("")) {
    isGameActive = false;
    setTimeout(() => alert("平局!"), 100);
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  for (let i = 0; i < winsGames.length; i++) {
    const [a, b, c] = winsGames[i];
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;

  const bxs = document.querySelectorAll(".bx");
  bxs.forEach((bx) => {
    bx.textContent = "";
  });
}

document.addEventListener("DOMContentLoaded", initGame);
