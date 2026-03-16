import { Effects, EFFECTS } from './constants.js';

const effectsListNode = document.querySelector('.effects__list');
const sliderNode = document.querySelector('.effect-level__slider');
const inputNode = document.querySelector('.effect-level__value');
const imageNode = document.querySelector('.img-upload__preview img');
const sliderContainerNode = document.querySelector('.effect-level');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(sliderNode, Effects[currentEffect].slider);

const updateSlider = () => {
  sliderNode.noUiSlider.updateOptions(Effects[currentEffect].slider);
};

const render = () => {
  if (currentEffect === EFFECTS.NONE) {
    imageNode.style.filter = '';
    return;
  }
  const {style, units} = Effects[currentEffect];
  imageNode.style.filter = `${style}(${inputNode.value}${units})`;
};

sliderNode.noUiSlider.on('update', () => {
  inputNode.value = sliderNode.noUiSlider.get();
  render();
});

const showSlider = (isVisible = true) => {
  if (isVisible) {
    sliderContainerNode.classList.remove('hidden');
  } else {
    sliderContainerNode.classList.add('hidden');
  }
};

export const resetEffects = () => {
  currentEffect = EFFECTS.NONE;
  render();
  showSlider(false);
};

effectsListNode.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  if (currentEffect === EFFECTS.NONE) {
    resetEffects();
    return;
  }
  showSlider();
  updateSlider();

});

resetEffects();
