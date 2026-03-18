import { render } from './render-cards.js';
import './form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';


getData()
  .then((photos) => {
    render(photos);
    // filters connection

  })
  .catch(()=>{
    showAlert();
  });

