const newEvent = () => {
  window.dispatchEvent(new Event('statechange'));
};

export default newEvent;
