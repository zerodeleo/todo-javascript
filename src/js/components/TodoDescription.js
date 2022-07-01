const TodoDescription = (todo) => {
  const todoDescription = document.createElement('p');
  todoDescription.classList.add('todo__description');
  todoDescription.innerHTML = todo.description !== undefined ? todo.description : '';
  todoDescription.setAttribute('id', todo.createdAt);
  return todoDescription;
};

export default TodoDescription;
