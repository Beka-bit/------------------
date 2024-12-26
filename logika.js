const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = '<h2>🎆 Happy New Year! 🎆</h2>';
  }
}

// Update countdown every second
const countdown = setInterval(updateCountdown, 1000);




const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 100);

document.addEventListener('DOMContentLoaded',function(){
  let header = document('headerIndex')
  let btn = this.getElementById('btn')

  window.addEventListener("scroll",function(){
    if(window.scrollY>300){
      header.style.backgroundColor="cadetblue"
      btn.style.display = "block"
    }else{
       header.style.backgroundColor="white"
      btn.style.display = "none"
    }
  })
})
