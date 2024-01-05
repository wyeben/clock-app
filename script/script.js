function setClock() {
    const deg = 6;
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
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
  