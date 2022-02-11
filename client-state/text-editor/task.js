const textArea = document.getElementById('editor');
const closeBtn = document.querySelector('.btn');

textArea.addEventListener('input', () => {
  localStorage.setItem('text', textArea.value);
});

closeBtn.addEventListener('click', () => {
  textArea.value = '';
  localStorage.removeItem('text');
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('text')) {
    textArea.value = localStorage.getItem('text');
  }
});
