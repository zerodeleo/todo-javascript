const validateTodo = (title) => {
  if (!title || title === '') {
    return false;
  }
  return true;
};

export default validateTodo;
