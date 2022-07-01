import Todo from '../components/Todo';
import newEvent from './newEvent';

const renderTodos = () => {
  const todoList = document.querySelector('.todo__list');
  todoList.innerHTML = '';
  const state = JSON.parse(localStorage.getItem('state'));
  state.todos.shift();
  state.todos.forEach((todo) => {
    if (!todo.isDone) todoList.append(Todo(todo));
  });
  state.todos.forEach((todo) => {
    if (todo.isDone) todoList.append(Todo(todo));
  });
  newEvent();
};

export default renderTodos;
