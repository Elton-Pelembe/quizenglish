let currentQuestion = 0;
let score = 0;
let timerInterval;
let questions = [];
let levelName = "";

function initLevel(level, questionSet) {
    levelName = level;
    questions = questionSet;
    currentQuestion = 0;
    score = 0;
}

function startQuiz() {
    document.querySelector(".aula").style.display = "none";
    document.querySelector(".quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }
    const q = questions[currentQuestion];
    const container = document.getElementById('quiz-container');
    container.innerHTML = `<h3>${q.question}</h3>`;
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => selectAnswer(i);
        container.appendChild(btn);
    });

    updateProgress();
    startTimer();
}

function selectAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    clearInterval(timerInterval);
    showQuestion();
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('timer').textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            currentQuestion++;
            showQuestion();
        }
    }, 1000);
}

function updateProgress() {
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = progressPercent + "%";
}

function endQuiz() {
    saveProgress(levelName, score);
    document.getElementById('quiz-container').innerHTML = `<h2>Você fez ${score} pontos!</h2>`;
}

function saveProgress(level, score) {
    let progresso = JSON.parse(localStorage.getItem("progresso"));
    progresso.niveis[level] = score;
    localStorage.setItem("progresso", JSON.stringify(progresso));
    checkAchievements();
}
