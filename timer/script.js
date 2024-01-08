let timerHse = document.querySelector('.timer-hse');
let playButton = document.querySelector('.play-btn');
let resetButton = document.querySelector('.reset-btn');
let clockButton = document.querySelector('.clock-btn');



let hours = 0;
let minute = 0;
let seconds = 0;

let intervalId = null;

playButton.addEventListener('click', () => {

  if(intervalId === null){
    intervalId = setInterval(play, 1000);
    playButton.innerHTML = 'Pause';
    playButton.classList.remove('play-btn');
    playButton.classList.add('pause-btn');
  }else{
    clearInterval(intervalId);
    intervalId = null;
    playButton.innerHTML = 'Play';
    playButton.classList.remove('pause-btn');
    playButton.classList.add('play-btn');

  }

});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    hours = 0;
    minute = 0;
    seconds = 0;
    displayTime();
    playButton.innerHTML = 'Play';
    playButton.classList.remove('pause-btn');
    playButton.classList.add('play-btn');
});

clockButton.addEventListener('click', () => {
    window.location.href = '../index.html'
});

function play(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minute++;

        if(minute === 60){
          
            minute = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime(){
    timerHse.innerHTML = `${hours.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}