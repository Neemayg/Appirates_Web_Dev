// step 1 Gett al instances of all the reauired elements
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");

const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// step 2: Declare all the required variables

let scores1, scores2, curretScore, activePlayer, playing;

// Step 3 New game button Functionality

const init = () => {
  scores1 = 0;
  scores2 = 0;
  curretScore = 0;
  playing = true;
  activePlayer = 0;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  diceEl.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};

init();

const changePlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

  curretScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

// step 4 Roll Dice Button Functionality
let rollDice = () => {
  // step 4.1 We are playing or not
  if (playing) {
    // ste4.1.1 Generate a random number between 1-6
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);

    // step 4.1.2 Display the dice
    diceEl.src = `dice-${randomNumber}.png`;
    diceEl.classList.remove("hidden");

    if (randomNumber === 1) {
      // step 4.1.3 Check for rolled 1: if true switch to next player
      changePlayer();
    } else {
      // step 4.1.4 if false add dice to current score
      curretScore = curretScore + randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curretScore;
    }
  }
};
btnRoll.addEventListener("click", rollDice);
btnNew.addEventListener("click", init);