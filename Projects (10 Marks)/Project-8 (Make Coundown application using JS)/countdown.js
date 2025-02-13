let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);

    let remainingTime = [
        parseInt(document.getElementById('hoursInput').value) || 0,
        parseInt(document.getElementById('minutesInput').value) || 0,
        parseInt(document.getElementById('secondsInput').value) || 0
    ].reduce((total, time, index) => total + time * [3600, 60, 1][index], 0);

    if (remainingTime <= 0) return alert('Please enter a valid time!');

    updateDisplay(remainingTime);

    countdownInterval = setInterval(() => {
        if (remainingTime <= 0) {
            updateDisplay(0);
            alert('Time is up!');
            clearInterval(countdownInterval);
        } else {
            remainingTime--;
            updateDisplay(remainingTime);
        }
    }, 1000);
}

function updateDisplay(seconds) {
    document.getElementById('hours').innerText = String(Math.floor(seconds / 3600)).padStart(2, '0');
    document.getElementById('minutes').innerText = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds % 60).padStart(2, '0');
}