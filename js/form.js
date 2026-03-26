import { showModal } from './util.js';
import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { SUBMIT_TEXTS, WINDOW_TYPES } from './constants.js';
import { sendData } from './api.js';
import { removeEscControl, setEscControl } from './esc-controller.js';

const formNode = document.querySelector('.img-upload__form');
const inputNode = formNode.querySelector('.img-upload__input');
const modalNode = formNode.querySelector('.img-upload__overlay');
const closeButtonNode = formNode.querySelector('.img-upload__cancel');
const submitButtonNode = formNode.querySelector('.img-upload__submit');
const imageNode = formNode.querySelector('.img-upload__preview img');
const effectsPreviewNodes = formNode.querySelectorAll('.effects__preview');
const descriptionNode = document.querySelector('.text__description');
const hashtagNode = document.querySelector('.text__hashtags');

const closeForm = () => {
  showModal(modalNode, false);
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
};
const isPosibleClosingForm = () => !((document.activeElement === descriptionNode) || (document.activeElement === hashtagNode));

inputNode.addEventListener('change', () => {
  showModal(modalNode);
  const file = inputNode.files[0];
  const imageUrl = URL.createObjectURL(file);
  imageNode.src = imageUrl;
  effectsPreviewNodes.forEach((image)=>{
    image.style.backgroundImage = `url(${imageUrl})`;
  });
  setEscControl(closeForm, isPosibleClosingForm);
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscControl();
});

const disableSubmit = (isDisabled = true) => {
  submitButtonNode.disabled = isDisabled;
  submitButtonNode.textContent = isDisabled ? SUBMIT_TEXTS.DISABLED : SUBMIT_TEXTS.ACTIVE;
};

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    disableSubmit();
    sendData(new FormData(formNode))
      .then((response)=>{
        if (!response.ok) {
          throw new Error();
        }
        closeForm();
        removeEscControl();
        showPopup(WINDOW_TYPES.SUCCESS);
      })
      .finally(()=>{
        disableSubmit(false);
      })
      .catch(()=>{
        showPopup(WINDOW_TYPES.ERROR);
      });
  }
});
