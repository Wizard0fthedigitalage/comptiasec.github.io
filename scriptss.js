const passingScore = 70; // Define passing score percentage

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60 * 60; // 60 minutes in seconds

function startTimer() {
    const timerElement = document.getElementById('timer');
    timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function loadQuestion(index) {
    const questionContainer = document.getElementById('quiz-container');
    questionContainer.innerHTML = `
        <h2>${questions[index].question}</h2>
        ${questions[index].options.map((option, i) => `
            <div>
                <input type="radio" id="option${i}" name="option" value="${option}">
                <label for="option${i}">${option}</label>
            </div>
        `).join('')}
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            document.getElementById('next-button').style.display = 'none';
            document.getElementById('submit-button').style.display = 'block';
        }
    } else {
        alert('Please select an answer before moving to the next question.');
    }
}

function submitQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const percentageScore = (score / questions.length) * 100;
    const resultMessage = percentageScore >= passingScore ? 'Congratulations, you passed!' : 'Sorry, you failed.';
    document.getElementById('result').innerHTML = `
        You scored ${score} out of ${questions.length} (${percentageScore.toFixed(2)}%). ${resultMessage}
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    loadQuestion(currentQuestionIndex);
});
