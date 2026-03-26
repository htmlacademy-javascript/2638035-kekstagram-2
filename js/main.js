import { render } from './render-cards.js';
import './form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { initFilters } from './filters.js';

getData()
  .then((photos) => {
    render(photos);
    initFilters(photos);
  })
  .catch(()=>{
    showAlert();
  });

