let currentQuestion = 1;

function navigate(direction) {
    document.getElementById(`question-${currentQuestion}`).style.display = 'none';

    if (direction === 'next' && currentQuestion < 10) {
        currentQuestion++;
    } else if (direction === 'prev' && currentQuestion > 1) {
        currentQuestion--;
    }

    document.getElementById(`question-${currentQuestion}`).style.display = 'block';

    document.getElementById('prev').disabled = currentQuestion === 1;
    document.getElementById('next').disabled = currentQuestion === 10;

    if (currentQuestion === 10) {
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
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    const q6Answer = document.querySelector('input[name="q6"]:checked');
    const q7Answer = document.querySelector('input[name="q7"]:checked');
    const q8Answer = document.querySelector('input[name="q8"]:checked');
    const q9Answer = document.querySelector('input[name="q9"]:checked');
    const q10Answer = document.querySelector('input[name="q10"]:checked');

    if (q1Answer && q1Answer.value === "b") {
        score++;
    }
    if (q2Answer && q2Answer.value === "b") {
        score++;
    }
    if (q3Answer && q3Answer.value === "b") {
        score++;
    }
    if (q4Answer && q4Answer.value === "b") {
        score++;
    }
    if (q5Answer && q5Answer.value === "b") {
        score++;
    }
    if (q6Answer && q6Answer.value === "b") {
        score++;
    }
    if (q7Answer && q7Answer.value === "b") {
        score++;
    }
    if (q8Answer && q8Answer.value === "b") {
        score++;
    }
    if (q9Answer && q9Answer.value === "b") {
        score++;
    }
    if (q10Answer && q10Answer.value === "b") {
        score++;
    }


    localStorage.setItem(`${quizName}Score`, score);

    window.location.href = "/index.html";
}