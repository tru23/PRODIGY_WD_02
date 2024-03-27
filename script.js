let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  return date.toISOString().substr(11, 8);
}

function updateTime() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', function() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime() - elapsedTime;
    timer = setInterval(updateTime, 10);
  }
});

pauseBtn.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', function() {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
  }
});
