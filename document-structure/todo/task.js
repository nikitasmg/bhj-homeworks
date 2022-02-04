let state = {};
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
let count = 0;
const addToState = (value) => {
  state[count] = {
    task: value,
    id: count,
  };
};

const renderState = () => {
  let tasks = [];
  for (let key in state) {
    const elem = state[key];
    tasks.push(`
            <div class="task" data-id = ${elem.id}>
                <div class="task__title">
                   ${elem.task}     
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div> 
        `);
  }
  tasks = tasks.join('');
  taskList.innerHTML = tasks;
};

const removeFromState = (event) => {
  target = event.target;

  if (target.classList.contains('task__remove')) {
    const parent = target.closest('.task');
    const id = parent.getAttribute('data-id');
    console.log(id);
    delete state[id];
  }
};

taskForm.addEventListener('submit', (e) => {
  count = count + 1;
  e.preventDefault();
  target = e.target;
  input.value;
  addToState(input.value);
  renderState();
  input.value = '';
});

taskList.addEventListener('click', (event) => {
  removeFromState(event);
  renderState();
});
