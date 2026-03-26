import { Filters, RANDOM_FACTOR, RANDOM_PHOTOS_COUNT } from './constants.js';
import { render } from './render-cards.js';
import { debounce } from './util.js';

const sectionNode = document.querySelector('.img-filters');
const formNode = sectionNode.querySelector('.img-filters__form');

let localPhotos;

const debouncedRender = debounce(render);

export const initFilters = (photos) => {
  localPhotos = [...photos];
  sectionNode.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const getFilteredPhotos = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - RANDOM_FACTOR).slice(0, RANDOM_PHOTOS_COUNT),
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length)
};

formNode.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    const id = button.id;
    const filteredPhotos = getFilteredPhotos[id]();
    debouncedRender(filteredPhotos);
  }
});
