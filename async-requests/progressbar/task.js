const form = document.getElementById('form');
let progress = document.getElementById('progress');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  progress.value = 0;
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  // обработчик для отправки
  xhr.upload.onprogress = function (event) {
    let ready = event.loaded;
    let total = event.total;
    let percent = (ready * 100) / total / 100;
    progress.value = Number(progress.value) + Number(percent);
    console.log(percent);
  };

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
});
