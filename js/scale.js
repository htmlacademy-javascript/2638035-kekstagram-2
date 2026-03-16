import { Scale } from './constants.js';

const minusNode = document.querySelector('.scale__control--smaller');
const plusNode = document.querySelector('.scale__control--bigger');
const inputNode = document.querySelector('.scale__control--value');
const imageNode = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  inputNode.value = `${currentScale}%`;
  imageNode.style.transform = `scale(${currentScale}%)`;
};

minusNode.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP >= Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
});

plusNode.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP <= Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
