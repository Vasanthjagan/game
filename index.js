let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let timeLeft = 30; // 30 seconds
let timerInterval;

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById("timer").textContent = `⏳ Time Left: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            let msg = document.getElementById("msg");
            msg.textContent = "⏰ Time's up! You lost.";
            msg.style.color = "red";
            msg.classList.add("lose-glow");
            disableGame();
        }
    }, 1000);
}

// Guess Logic
function guessing() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("msg");
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠ Please enter a number between 1 and 100!";
        message.style.color = "yellow";
        message.className = "";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        message.style.color = "lightgreen";
        message.className = "win-glow";
        clearInterval(timerInterval);
        disableGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "orange";
        message.className = "";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "orange";
        message.className = "";
    }
}

// Disable game after win/loss
function disableGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("btn").disabled = true;
}

// Start timer when page loads
window.onload = startTimer;
