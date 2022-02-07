const tooltip = document.querySelector('.tooltip');

document.body.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('has-tooltip')) {
    e.preventDefault();
    const title = target.getAttribute('title');
    const text = `<div class="tooltip tooltip_active" style="left: 0; top: -30px">
    ${title}
  </div>`;
    if (!target.querySelector('.tooltip')) {
      target.innerHTML = target.innerHTML += text;
    } else {
      target.removeChild(target.lastChild);
    }
  }
});
