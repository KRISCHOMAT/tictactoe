let turn = "X";
let xScore = 0;
let ties = 0;
let tries = 0;
let oScore = 0;
let winner = undefined;

const btns = document.getElementsByClassName("btn-game");
const turnSpan = document.getElementById("turn");
const xScoreSpan = document.getElementById("x-score");
const oScoreSpan = document.getElementById("o-score");
const tiesSpan = document.getElementById("ties");
const refreshButton = document.getElementById("refresh");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    btns[i].classList.add(turn.toLowerCase());
    btns[i].innerHTML = turn;
    btns[i].disabled = true;
    winnerCheck(turn);
    ties++;
    setTries();
    tiesSpan.innerHTML = ties;
    setTurn();
  });
}

refreshButton.addEventListener("click", () => {
  turn = "X";
  xScore = 0;
  ties = 0;
  tries = 0;
  oScore = 0;
  turnSpan.innerHTML = turn;
  xScoreSpan.innerHTML = xScore;
  oScoreSpan.innerHTML = oScore;
  tiesSpan.innerHTML = ties;
  refresh();
});

function setTries() {
  tries++;
  if (tries === 9) {
    tries = 0;
    setTimeout(() => {
      refresh();
    }, 2000);
  }
}

function setTurn() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  turnSpan.innerHTML = turn;
  xScoreSpan.innerHTML = xScore;
  oScoreSpan.innerHTML = oScore;
}

function refresh() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].innerHTML = "";
    btns[i].disabled = false;
    btns[i].classList.remove("x");
    btns[i].classList.remove("o");
  }
}

function winnerCheck(player) {
  if (
    (btns[0].innerHTML === player &&
      btns[1].innerHTML === player &&
      btns[2].innerHTML === player) ||
    (btns[3].innerHTML === player &&
      btns[4].innerHTML === player &&
      btns[5].innerHTML === player) ||
    (btns[6].innerHTML === player &&
      btns[7].innerHTML === player &&
      btns[8].innerHTML === player) ||
    (btns[0].innerHTML === player &&
      btns[3].innerHTML === player &&
      btns[6].innerHTML === player) ||
    (btns[1].innerHTML === player &&
      btns[4].innerHTML === player &&
      btns[7].innerHTML === player) ||
    (btns[2].innerHTML === player &&
      btns[5].innerHTML === player &&
      btns[8].innerHTML === player) ||
    (btns[0].innerHTML === player &&
      btns[4].innerHTML === player &&
      btns[8].innerHTML === player) ||
    (btns[2].innerHTML === player &&
      btns[4].innerHTML === player &&
      btns[6].innerHTML === player)
  ) {
    tries = 0;
    if (player === "X") {
      xScore++;
    } else {
      oScore++;
    }
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
    xScoreSpan.innerHTML = xScore;
    oScoreSpan.innerHTML = oScore;

    setTimeout(() => {
      refresh();
      for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
      }
    }, 2000);
  }
}
