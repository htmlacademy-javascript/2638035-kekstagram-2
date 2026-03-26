import { openModal } from './modal.js';

const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const containerNode = document.querySelector('.pictures');

let localPictures;

const clearPhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((photo)=>{
    photo.remove();
  });
};

export const render = (pictures) => {
  clearPhotos();
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
  });
  containerNode.append(fragment);
};

containerNode.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPictures.find((item)=> item.id === id);
    openModal(photo);
  }
});
