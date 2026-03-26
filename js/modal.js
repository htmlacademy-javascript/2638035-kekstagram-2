import { COMMENTS_STEP } from './constants.js';
import { removeEscControl, setEscControl } from './esc-controller.js';
import { showModal } from './util.js';

const modalNode = document.querySelector('.big-picture');
const closeButtonNode = document.querySelector('.big-picture__cancel');
const imageNode = modalNode.querySelector('.big-picture__img img');
const descriptionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const shownCountNode = modalNode.querySelector('.social__comment-shown-count');
const totalCountNode = modalNode.querySelector('.social__comment-total-count');
const commentTemplate = modalNode.querySelector('.social__comment');
const commentsListNode = modalNode.querySelector('.social__comments');
const loaderButtonNode = modalNode.querySelector('.social__comments-loader');

let localComments;
let shownComments;

const renderStatistic = () => {
  shownCountNode.textContent = shownComments;
};

const renderLoaderButton = () => {
  if (localComments.length) {
    loaderButtonNode.classList.remove('hidden');
  } else {
    loaderButtonNode.classList.add('hidden');
  }
};

const renderComments = () => {
  localComments.splice(0, COMMENTS_STEP).forEach((comment) => {
    const newCommentNode = commentTemplate.cloneNode(true);
    const image = newCommentNode.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    newCommentNode.querySelector('.social__text').textContent = comment.message;

    commentsListNode.append(newCommentNode);
    shownComments++;
  });
  renderStatistic();
  renderLoaderButton();
};

const render = ({url, description, likes, comments}) => {
  imageNode.src = url;
  descriptionNode.textContent = description;
  likesNode.textContent = likes;
  totalCountNode.textContent = comments.length;
  commentsListNode.innerHTML = '';
  shownComments = 0;
  localComments = [...comments];
  renderComments();
};

export const openModal = ({url, description, likes, comments}) => {
  showModal(modalNode);
  render({url, description, likes, comments});
  setEscControl(()=>{
    showModal(modalNode, false);
  });
};

closeButtonNode.addEventListener('click', () => {
  showModal(modalNode, false);
  removeEscControl();
});

loaderButtonNode.addEventListener('click', () => {
  renderComments();
});
