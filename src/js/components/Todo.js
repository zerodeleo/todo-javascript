import TodoTitle from './TodoTitle';
import TodoDescription from './TodoDescription';
import TodoBtnDelete from './TodoBtnDelete';

const Todo = (todo) => {
  const todoItem = document.createElement('article');
  todoItem.setAttribute('id', todo.createdAt);
  todoItem.classList.add('todo__item');
  todoItem.setAttribute('data-testid', 'todoItem');

  const todoTitle = TodoTitle(todo);
  const todoDescription = TodoDescription(todo);

  todoItem.append(todoTitle, todoDescription);

  if (todo.isDone) {
    todoItem.classList.add('todo__item--completed');
    const btnDelete = TodoBtnDelete(todo);
    todoItem.append(btnDelete);
  } else {
    todoItem.classList.add('todo__item');
  }

  return todoItem;
};

export default Todo;
