const viewTimeButton = document.querySelector('.view-time-btn');
const viewDateButton = document.querySelector('.view-date-btn');
const timerButton = document.querySelector('.timer-btn');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const view = document.querySelector('.view');
const alarmButton = document.querySelector('.alarm-btn');

let timeIntervalId;

viewTimeButton.addEventListener('click', () => {
  if (!timeIntervalId) {
    updateTimeInView();
    timeIntervalId = setInterval(updateTimeInView, 1000); 
  }
});

viewDateButton.addEventListener('click', () => {
  clearInterval(timeIntervalId); 
  timeIntervalId = null; 
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  view.innerHTML = `Date: ${year}-${month}-${day}`;
});

timerButton.addEventListener('click', () => {
  document.location.href = 'timer/index.html'
})

alarmButton.addEventListener('click', () => {
  document.location.href = 'alarm/index.html';
})

function updateTimeInView() {
  const currentTime = new Date();
  const hour = currentTime.getHours().toString().padStart(2, '0');
  const minute = currentTime.getMinutes().toString().padStart(2, '0');
  const second = currentTime.getSeconds().toString().padStart(2, '0');
  view.innerHTML = `Time: ${hour}:${minute}:${second}`;
}

function setClock() {
  const deg = 6;
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * deg;
    const second = date.getSeconds() * deg;

    hourHand.style.transform = `rotate(${hour + minute / 12}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${second}deg)`;
  }, 1000);
}

setClock();
