import { WINDOW_TYPES } from './constants.js';

const body = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [WINDOW_TYPES.SUCCESS]: successTemplate,
  [WINDOW_TYPES.ERROR]: errorTemplate
};

export const showPopup = (windowType) => {
  const popup = templates[windowType].cloneNode(true);
  body.append(popup);
  popup.addEventListener('click', ({target})=>{
    if (target.classList.contains(windowType) || target.classList.contains(`${windowType}__button`)) {
      popup.remove();
    }
  });
};
