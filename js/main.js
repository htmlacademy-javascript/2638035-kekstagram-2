import { createImageList } from './data.js';
import { render } from './render-cards.js';

const photos = createImageList(25);
render(photos);
