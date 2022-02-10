const pollTltle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
//получаем запрос
fetch('https://netology-slow-rest.herokuapp.com/poll.php')
  .then((res) => res.json())
  .then((data) => {
    const { title, answers } = data.data;
    const vote = data.id;
    //отображаем полученный ответ
    addTitle(title);
    addAnswers(answers);
    //вешаем обработчик на отрендеренные кнопки
    pollAnswers.addEventListener('click', (e) => {
      if (e.target.classList.contains('poll__answer')) {
        handleAlert(e, vote);
      }
    });
  })
  .catch((e) => console.log(e));

const addTitle = (title) => {
  pollTltle.innerText = title;
};

const handleAlert = (e, vote) => {
  const id = e.target.getAttribute('data-id');
  alert('Спасибо, ваш голос засчитан!');
  postAnswer(id, vote);
};

const addAnswers = (answers) => {
  answers.forEach((element, i) => {
    pollAnswers.insertAdjacentHTML(
      'beforeend',
      `<button data-id = "${i}" class="poll__answer">
        ${element}
      </button>`
    );
  });
};

//постим запрос и отображаем полученный ответ
const postAnswer = async (id, vote) => {
  let response = await fetch(
    'https://netology-slow-rest.herokuapp.com/poll.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `vote=${vote}&answer=${id}`,
    }
  );
  let result = await response.json();
  let allVotes = 0;
  result.stat.forEach((el) => (allVotes += el.votes));
  let stat = [];
  result.stat.forEach((el) => {
    const percent = ((el.votes * 100) / allVotes).toFixed(2);
    stat.push(`<span> ${el.answer} ${percent} %</span>`);
  });

  stat = stat.join('');

  pollAnswers.innerHTML = `<div class = "votes"> ${stat}</div>`;
};
