const TodoBtnDelete = (todo) => {
  const btnDeleteContainer = document.createElement('div');
  btnDeleteContainer.classList.add('todo__item__btn-delete__container');
  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('id', todo.createdAt);
  btnDelete.setAttribute('data-testid', 'btnDeleteTodo');
  btnDelete.classList.add('todo__item__btn-delete');
  btnDeleteContainer.append(btnDelete);

  return btnDeleteContainer;
};

export default TodoBtnDelete;
