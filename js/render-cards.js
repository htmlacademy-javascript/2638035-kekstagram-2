import { openModal } from './modal.js';

const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const containerNode = document.querySelector('.pictures');

let localPictures;

export const render = (pictures) => {
  // eslint-disable-next-line no-console
  console.log(pictures);
  localPictures = [...pictures];
  const fragment = document.createDocumentFragment();
  pictures.forEach(({url, description, likes, comments, id}) => {
    const card = template.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__likes').textContent = likes;
    card.querySelector('.picture__comments').textContent = comments.length;
    fragment.append(card);
    card.dataset.id = id;
    // card.addEventListener('click', () => {
    //   openModal({url, description, likes, comments});
    // });


  });
  containerNode.append(fragment);
};

containerNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPictures.find((item)=> item.id === id);
    openModal(photo);
  }
});
