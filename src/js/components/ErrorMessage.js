const ErrorMessage = (message) => {
  const target = document.querySelector('.todo__input');
  if (!target.querySelector('.todo__error')) {
    const container = document.createElement('div');
    container.classList.add('todo__error');
    container.innerHTML = message;
    target.append(container);
  }
};

export default ErrorMessage;
