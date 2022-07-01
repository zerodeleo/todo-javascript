import '../style/todo.scss';
import '../style/desktop.scss';

import defaultState from './state/defaultState';
import addTodo from './actions/addTodo';
import renderTodos from './actions/renderTodos';
import updateTodo from './actions/updateTodo';
import deleteTodo from './actions/deleteTodo';
import validateTodo from './actions/valiateTodo';
import ErrorMessage from './components/ErrorMessage';

localStorage.setItem('state', JSON.stringify(defaultState));

const todoInput = document.querySelector('.todo__input');

todoInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = todoInput.querySelector('.todo__title').value;
  const description = todoInput.querySelector('.todo__description').value;
  if (validateTodo(title)) {
    if (document.querySelector('.todo__error')) document.querySelector('.todo__error').remove();
    addTodo(title, description);
    renderTodos();
    todoInput.querySelector('.todo__title').value = '';
    todoInput.querySelector('.todo__description').value = '';
  } else {
    ErrorMessage('Please provide a title');
  }
});

window.addEventListener('statechange', () => {
  const todoItem = document.querySelectorAll('.todo__item');
  todoItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const { id } = e.target;
      updateTodo(id);
      renderTodos();
    });
  });

  const btnDelete = document.querySelectorAll('.todo__item__btn-delete');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const { id } = e.target;
      deleteTodo(id);
      renderTodos();
    });
  });
});
