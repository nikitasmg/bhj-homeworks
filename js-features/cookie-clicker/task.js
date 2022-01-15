function clicker() {
  const clickerCounter = document.getElementById('clicker__counter');
  const clickerSpeed = document.getElementById('clicker__speed');
  const cookie = document.getElementById('cookie');
  let count = 0;
  let dateTime;
  let time;

  cookie.addEventListener('click', () => {
    time = Date.now() - dateTime
    dateTime = Date.now();
    time ? clickerSpeed.textContent = (1/(time/1000)).toFixed(2) : false;
    count +=1;
    cookie.width == 200 ? cookie.width = 250 : cookie.width = 200;
    clickerCounter.textContent = count;
  })
}

 clicker()

