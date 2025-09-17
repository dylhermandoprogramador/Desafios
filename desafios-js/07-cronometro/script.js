let seconds = 0;
let intervalId = null;

const display = document.querySelector(".timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
  const minutos = Math.floor(seconds / 60);
  const segundos = seconds % 60;

  const minutosFormatados = String(minutos).padStart(2, "0");
  const segundosFormatados = String(segundos).padStart(2, "0");

  display.textContent = `${minutosFormatados}:${segundosFormatados}`;
}

function tick() {
  seconds++;
  updateDisplay();
}

startBtn.addEventListener("click", () => {
  if (intervalId === null) { 
    intervalId = setInterval(tick, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  updateDisplay();
});

updateDisplay();