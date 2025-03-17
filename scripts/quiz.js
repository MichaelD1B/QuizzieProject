let currentQuestion = 1;

function navigate(direction) {
    // Hide the current question
    document.getElementById(`question-${currentQuestion}`).style.display = 'none';

    // Change the current question based on the direction
    if (direction === 'next' && currentQuestion < 3) {
        currentQuestion++;
    } else if (direction === 'prev' && currentQuestion > 1) {
        currentQuestion--;
    }

    // Show the new current question
    document.getElementById(`question-${currentQuestion}`).style.display = 'block';

    // Update the navigation buttons
    document.getElementById('prev').disabled = currentQuestion === 1;
    document.getElementById('next').disabled = currentQuestion === 3;

    // Show the Finish button on the last question
    if (currentQuestion === 3) {
        document.getElementById('next').style.display = 'none'; // Hide Next button
        document.getElementById('finish').style.display = 'block'; // Show Finish button
    } else {
        document.getElementById('next').style.display = 'block'; // Show Next button
        document.getElementById('finish').style.display = 'none'; // Hide Finish button
    }
}

// Function to handle quiz submission
function submitQuiz(quizName) {
    let score = 0;

    // Get the answers
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');

    // Check if each answer is correct
    if (q1Answer && q1Answer.value === "b") {
        score++;
    }
    if (q2Answer && q2Answer.value === "b") {
        score++;
    }
    if (q3Answer && q3Answer.value === "b") {
        score++;
    }

    // Save the score to local storage with a unique key for each quiz
    localStorage.setItem(`${quizName}Score`, score);

    // Redirect to index.html
    window.location.href = "/index.html";
}