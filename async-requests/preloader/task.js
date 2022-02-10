const valuteContainer = document.getElementById('items');

const stopSpinner = () => {
  const spinner = document.getElementById('loader');
  spinner.classList.remove('loader_active');
};

const renderValuts = (valuts) => {
  for (key in valuts) {
    console.log(valuts[key]);
    valuteContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="item">
    <div class="item__code">
            ${valuts[key].CharCode}
        </div>
        <div class="item__value">
            ${valuts[key].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>`
    );
  }
};

fetch('https://netology-slow-rest.herokuapp.com')
  .then((res) => res.json())
  .then((data) => {
    const valuts = data.response.Valute;
    stopSpinner();
    renderValuts(valuts);
  })
  .catch((e) => console.log(e));
