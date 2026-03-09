const modalNode = document.querySelector('.big-picture');
const closeButtonNode = document.querySelector('.big-picture__cancel');
const body = document.body;
const imageNode = modalNode.querySelector('.big-picture__img img');
const descriptionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const shownCountNode = modalNode.querySelector('.social__comment-shown-count');
const totalCountNode = modalNode.querySelector('.social__comment-total-count');
const templateComment = modalNode.querySelector('.social__comment');


const showModal = (isVisible = true) => {
  if (isVisible) {
    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const render = ({url, description, likes, comments}) => {
  imageNode.src = url;
  descriptionNode.textContent = description;
  likesNode.textContent = likes;
  shownCountNode.textContent = comments.length;
  totalCountNode.textContent = comments.length;
};

export const openModal = ({url, description, likes, comments}) => {
  showModal();
  render({url, description, likes, comments});
};

closeButtonNode.addEventListener('click', () => {
  showModal(false);
});
