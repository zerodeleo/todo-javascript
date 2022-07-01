import newEvent from './newEvent';

const updateTodo = (id) => {
  const state = JSON.parse(localStorage.getItem('state'));
  const updateState = state.todos.map((todo) => {
    if (todo.createdAt === parseInt(id, 10)) {
      const newTodo = {
        title: todo.title,
        description: todo.description,
        isDone: !todo.isDone,
        createdAt: new Date().getTime(),
      };
      return newTodo;
    }
    return todo;
  });
  localStorage.setItem('state', JSON.stringify({ todos: updateState }));
  newEvent();
};

export default updateTodo;
