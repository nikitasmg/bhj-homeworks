function clicker() {
  const clickerCounter = document.getElementById('clicker__counter');
  const clickerSpeed = document.getElementById('clicker__speed');
  const cookie = document.getElementById('cookie');
  let count = 0;
  let time = 0;
  let timer;

  cookie.addEventListener('click', () => {
    clearInterval(timer)
    clickerSpeed.textContent = (1/time).toFixed(2);
    time = 0;
    count +=1;
    cookie.width == 200 ? cookie.width = 250 : cookie.width = 200;
    clickerCounter.textContent = count;
    timer = setInterval(() => {
      time += 0.1;
      console.log(time);
    },100)
    time >= 10 ? clearInterval(timer) : false;
  })
}

clicker()