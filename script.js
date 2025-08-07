// script.js

// Sound effects
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const timeoutSound = new Audio("sounds/timeout.mp3");
const levelUpSound = new Audio("sounds/level-up.mp3");


// Background music
const bgMusic = new Audio("sounds/bg-music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.play();

// Elements
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const playerNameElement = document.getElementById("player-name");
const livesElement = document.getElementById("lives");
const scoreElement = document.getElementById("score");
const levelTitle = document.getElementById("level-title");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const MAX_LIVES = 3;
const TIME_PER_QUESTION = 10;

let currentLevel = parseInt(localStorage.getItem("playerLevel")) || 1;
let currentQuestionIndex = 0;
let score = parseInt(localStorage.getItem("playerScore")) || 0;
let lives = parseInt(localStorage.getItem("playerLives")) || MAX_LIVES;
let timer;
let timeLeft;

const playerName = localStorage.getItem("playerName") || "Player";
playerNameElement.innerText = playerName;
livesElement.innerText = lives;
scoreElement.innerText = score;

window.onload = () => {
  startLevel();
};

function startLevel() {
  levelTitle.innerText = `Level ${currentLevel}`;
  currentQuestionIndex = 0;
  resetState();
  updateProgressBar();

  if (!questions[`level${currentLevel}`] || questions[`level${currentLevel}`].length === 0) {
    alert("No questions found for this level.");
    return;
  }

  showQuestion();
}

function showQuestion() {
  resetState();
  const currentLevelQuestions = questions[`level${currentLevel}`];

if (currentQuestionIndex >= currentLevelQuestions.length) {
  levelUpSound.play(); // <-- toca o som
  currentLevel++;
  localStorage.setItem("playerLevel", currentLevel);
  alert(`Parabéns! Você avançou para o nível ${currentLevel}`);
  startLevel();
  return;
}


  const currentQuestion = currentLevelQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  updateProgressBar();

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-option");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.correct));
    answerButtonsElement.appendChild(button);
  });

  nextButton.style.display = "none";
  nextButton.onclick = () => {
    currentQuestionIndex++;
    showQuestion();
  };

  startTimer();
}

function selectAnswer(selectedButton, correctAnswer) {
  clearInterval(timer);
  const isCorrect = selectedButton.innerText === correctAnswer;

  if (isCorrect) {
    selectedButton.classList.add("correct");
    correctSound.play();
    score += 10;
    scoreElement.innerText = score;
    localStorage.setItem("playerScore", score);
  } else {
    selectedButton.classList.add("wrong");
    wrongSound.play();
    lives--;
    livesElement.innerText = lives;
    localStorage.setItem("playerLives", lives);
    if (lives <= 0) {
      alert("Game Over!");
      resetGame();
      return;
    }
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.innerText === correctAnswer) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "inline-block";
}

function resetState() {
  clearInterval(timer);
  timerElement.innerText = `Time left: ${TIME_PER_QUESTION}s`;
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function startTimer() {
  clearInterval(timer);
  timeLeft = TIME_PER_QUESTION;
  timerElement.innerText = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeoutSound.play(); // <-- correto aqui
      lives--;
      livesElement.innerText = lives;
      localStorage.setItem("playerLives", lives);
      alert("Tempo esgotado! Você perdeu uma vida.");
      if (lives <= 0) {
        alert("Game Over!");
        resetGame();
        return;
      }
      nextButton.style.display = "inline-block";
      Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
      });
    }
  }, 1000);
}

function updateProgressBar() {
  const currentLevelQuestions = questions[`level${currentLevel}`];
  if (!currentLevelQuestions) return;
  const progress = Math.floor((currentQuestionIndex / currentLevelQuestions.length) * 100);
  progressBar.style.width = `${progress}%`;
}

function resetGame() {
  currentLevel = 1;
  score = 0;
  lives = MAX_LIVES;
  localStorage.setItem("playerLevel", currentLevel);
  localStorage.setItem("playerScore", score);
  localStorage.setItem("playerLives", lives);
  startLevel();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(registration => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch(error => {
        console.log("Falha ao registrar Service Worker:", error);
      });
  });
}

