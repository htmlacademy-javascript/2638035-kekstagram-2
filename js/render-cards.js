import { openModal } from './modal';

const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const containerNode = document.querySelector('.pictures');

export const render = (pictures) => {
  // eslint-disable-next-line no-console
  console.log(pictures);
  const fragment = document.createDocumentFragment();
  pictures.forEach(({url, description, likes, comments}) => {
    const card = template.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__likes').textContent = likes;
    card.querySelector('.picture__comments').textContent = comments.length;
    fragment.append(card);
  });
  containerNode.append(fragment);
};

openModal();
