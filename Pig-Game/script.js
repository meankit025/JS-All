"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

let scores, currentScore, activePlayer, playing;

//  starting condition when page loads or click on new game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const scorePlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//  rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate random dice number between 1 to 6
    let dice = Math.trunc(Math.random() * 6) + 1;

    //   display dice image according to dice random number
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //    condition for 1 and remaining dice number
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      scorePlayers();
    }
  }
});

//  hold button functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // current score store in score of current player
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //   check if player's score >= 100 finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //   else switch and display the scores of active player
      document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];
      scorePlayers();
    }
  }
});

//  reset button functionality
btnNew.addEventListener("click", init);
