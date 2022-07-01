import newEvent from './newEvent';

const addTodo = (title, description) => {
  const state = JSON.parse(localStorage.getItem('state'));

  const newTodo = {
    title,
    description,
    isDone: false,
    createdAt: new Date().getTime(),
  };
  const { todos } = state;
  todos.push(newTodo);
  localStorage.setItem('state', JSON.stringify({ todos }));
  newEvent();
};

export default addTodo;
