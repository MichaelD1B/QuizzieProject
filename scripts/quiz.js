let currentQuestion = 1;

function navigate(direction) {
    document.getElementById(`question-${currentQuestion}`).style.display = 'none';

    if (direction === 'next' && currentQuestion < 3) {
        currentQuestion++;
    } else if (direction === 'prev' && currentQuestion > 1) {
        currentQuestion--;
    }

    document.getElementById(`question-${currentQuestion}`).style.display = 'block';

    document.getElementById('prev').disabled = currentQuestion === 1;
    document.getElementById('next').disabled = currentQuestion === 3;

    if (currentQuestion === 3) {
        document.getElementById('next').style.display = 'none';
        document.getElementById('finish').style.display = 'block';
    } else {
        document.getElementById('next').style.display = 'block';
        document.getElementById('finish').style.display = 'none';
    }
}

function submitQuiz(quizName) {
    let score = 0;

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');

    if (q1Answer && q1Answer.value === "b") {
        score++;
    }
    if (q2Answer && q2Answer.value === "b") {
        score++;
    }
    if (q3Answer && q3Answer.value === "b") {
        score++;
    }

    localStorage.setItem(`${quizName}Score`, score);

    window.location.href = "/index.html";
}