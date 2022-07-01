import newEvent from './newEvent';

const deleteTodo = (id) => {
  const state = JSON.parse(localStorage.getItem('state'));
  const updateState = state.todos.filter((todo) => todo.createdAt !== parseInt(id, 10));
  localStorage.setItem('state', JSON.stringify({ todos: updateState }));
  newEvent();
};

export default deleteTodo;
