import { ALERT_DELAY } from './constants.js';

const body = document.body;
const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showModal = (modalNode, isVisible = true) => {
  if (isVisible) {
    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

export const showAlert = () => {
  const alert = alertTemplate.cloneNode(true);
  body.append(alert);
  setTimeout(()=>{
    alert.remove();
  }, ALERT_DELAY);
};


export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

