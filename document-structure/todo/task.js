let state = [];
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');
const input = document.getElementById('task__input');

/**
 * Добавляет в объект state
 * @param {any} event
 */
const addToState = (value) => {
  state.push(value);
};

/**Рендерит задачи из объекта state
 * @paramm
 */
const renderState = () => {
  let tasks = [];
  state.forEach((el, i) =>
    tasks.push(
      `
            <div class="task" data-id = ${i}>
                <div class="task__title">
                   ${el}     
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div> 
        `
    )
  );
  tasks = tasks.join('');
  taskList.innerHTML = tasks;
};

/**
 * Удаляет выбранную задачу из объекта state
 * @param {any} event
 */
const removeFromState = (event) => {
  target = event.target;

  if (target.classList.contains('task__remove')) {
    const parent = target.closest('.task');
    const id = parent.getAttribute('data-id');
    state.splice(id, 1);
  }
};

/**
 * Добавляет объект state в local storage
 * @param
 */

const addToLocalStorage = () => {
  localStorage.setItem('stateTasks', JSON.stringify(state));
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value !== '') {
    addToState(input.value);
    renderState();
    addToLocalStorage();
    input.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  removeFromState(event);
  addToLocalStorage();
  renderState();
});

//Рендерит корзину из local storage после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  const stateFromLocalStorage = JSON.parse(localStorage.getItem('stateTasks'));
  state = [...stateFromLocalStorage];
  console.log(state);
  renderState();
});
