const modalNode = document.querySelector('.big-picture');
const closeButtonNode = document.querySelector('.big-picture__cancel');
const body = document.body;
const imageNode = modalNode.querySelector('.big-picture__img img');
const descriptionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const shownCountNode = modalNode.querySelector('.social__comment-shown-count');
const totalCountNode = modalNode.querySelector('.social__comment-total-count');
const commentTemplate = modalNode.querySelector('.social__comment');
const commentsListNode = modalNode.querySelector('.social__comments');

let localComments;

const renderComments = () => {
  localComments.forEach((comment) => {
    const newCommentNode = commentTemplate.cloneNode(true);
    const image = newCommentNode.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    newCommentNode.querySelector('.social__text').textContent = comment.message;

    commentsListNode.append(newCommentNode);
  });
};


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
  commentsListNode.innerHTML = '';
  localComments = [...comments];
  renderComments();
};

export const openModal = ({url, description, likes, comments}) => {
  showModal();
  render({url, description, likes, comments});
};

closeButtonNode.addEventListener('click', () => {
  showModal(false);
});
