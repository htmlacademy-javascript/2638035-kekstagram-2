import { showModal } from './util.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const formNode = document.querySelector('.img-upload__form');
const inputNode = formNode.querySelector('.img-upload__input');
const modalNode = formNode.querySelector('.img-upload__overlay');
const closeButtonNode = formNode.querySelector('.img-upload__cancel');

const closeForm = () => {
  showModal(modalNode, false);
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

inputNode.addEventListener('change', () => {
  showModal(modalNode);
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

formNode.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
