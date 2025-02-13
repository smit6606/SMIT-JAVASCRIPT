let stopwatchInterval;
let elapsedTime = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    let startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 10);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay(elapsedTime);
}

function updateDisplay(time) {
  let totalSeconds = Math.floor(time / 1000);
  let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  let seconds = String(totalSeconds % 60).padStart(2, "0");
  let milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
  document.getElementById(
    "stopwatch"
  ).innerText = `${minutes}:${seconds}:${milliseconds}`;
}
