const holeInMole = () => {
  const holes = document.querySelectorAll('.hole')
  const dead = document.getElementById('dead')
  const lost = document.getElementById('lost')

  holes.forEach(el => el.addEventListener('click', () => {
  
    if(el.classList.contains('hole_has-mole')) {
      dead.textContent = +dead.textContent + 1
    } else {
      lost.textContent = +lost.textContent + 1
    }
    if(dead.textContent >= 10) {
      alert('WIN');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if(lost.textContent >= 5) {
      alert('LOOSE');
      lost.textContent = 0;
      lost.textContent = 0;
    }
  }))
}

holeInMole(); 
