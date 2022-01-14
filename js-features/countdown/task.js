let timer = document.getElementById('timer');


// function changeTimer() {
//   let timerId = setInterval(() => {
//     timer.textContent -= 1;
//     console.log(timer.textContent);
//     if(timer.textContent < 1) {
//       alert('Вы победили в конкурсе!');
//       clearInterval(timerId);
//     }
//   },1000)
// }

// changeTimer();



function timer2() {

  let seconds = 10;
  let link = document.getElementById('link');

  const timeHandler = (count) => {
    let hours = count > 0 ? Math.floor(count  / 60 / 60) % 24 : 0;
    let minutes = count > 0 ? Math.floor(count  / 60) % 60 : 0;
    let seconds = count > 0 ? Math.floor(count ) % 60 : 0;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`
  }

 let timerId = setInterval(() => {
    seconds -= 1;
    timer.textContent = timeHandler(seconds);
    if(seconds < 1) {
      alert('Вы победили в конкурсе!');
      location.assign(link.href)
      clearInterval(timerId);
      
    }
  },1000)
}

timer2()


