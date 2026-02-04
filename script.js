
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");

const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");

const numberBox = document.querySelector(".number");

const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = " No number!";

  } else if (guess === secretNumber) {
    message.textContent = " Correct Number!";
    numberBox.textContent = secretNumber;

    document.body.style.backgroundColor = "green";
    numberBox.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = " Too high!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "You lost!";
      scoreEl.textContent = 0;
    }

  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = " Too low!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "You lost!";
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  scoreEl.textContent = score;

  numberBox.textContent = "?";
  guessInput.value = "";

  document.body.style.backgroundColor = "#222";
  numberBox.style.width = "15rem";
});
