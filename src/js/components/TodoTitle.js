const TodoTitle = (todo) => {
  const todoTitle = document.createElement('h2');
  todoTitle.classList.add('todo__title');
  todoTitle.innerHTML = todo.title;
  todoTitle.setAttribute('id', todo.createdAt);

  return todoTitle;
};

export default (TodoTitle);
