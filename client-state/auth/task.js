const signInForm = document.getElementById('signin__form');
const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const logOut = document.getElementById('log-out');

//Сабмитим форму проверяем на пустые строки
signIn.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = new FormData(signInForm);
  form.append('login', signInForm.login.value);
  form.append('password', signInForm.password.value);
  if (signInForm.login.value && signInForm.password.value) {
    setForm(form);
    signInForm.login.value = '';
    signInForm.password.value = '';
  } else {
    alert('Введите данные');
  }
});

//отправка запроса
const setForm = async (form) => {
  const response = await fetch(
    'https://netology-slow-rest.herokuapp.com/auth.php',
    {
      method: 'POST',
      body: form,
    }
  );
  const result = await response.json();
  if (result.success) {
    success(result);
  } else {
    alert('Неверный логин/пароль!');
  }
};

//Действия при удачной авторизации
const success = (response) => {
  localStorage.setItem('userId', response.user_id);
  signIn.classList.remove('signin_active');
  userId.textContent = response.user_id;
  welcome.classList.add('welcome_active');
};

//Проверяем на наличие ID, грузим лк если есть
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('userId')) {
    signIn.classList.remove('signin_active');
    userId.textContent = localStorage.getItem('userId');
    welcome.classList.add('welcome_active');
  }
});

//Удаляем ID убираем лк
logOut.addEventListener('click', () => {
  localStorage.removeItem('userId');
  signIn.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
});
