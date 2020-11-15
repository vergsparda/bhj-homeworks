`use strict`

const input = document.querySelector('.tasks__input'),
  taskList = document.querySelector('.tasks__list'),
  taskButton = document.querySelector('.tasks__add');

function addTask() {
  if (input.value.trim()) {
    taskList.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    input.value = '';
  }
}
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
})

taskButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

taskList.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('task__remove')) {
    target.parentElement.remove();
  }
})
