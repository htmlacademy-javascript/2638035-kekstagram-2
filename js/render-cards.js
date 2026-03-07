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
    const likesNode = card.querySelector('.picture__likes');
    likesNode.textContent = likes;
    card.append(likesNode);
    const commentsNode = card.querySelector('.picture__comments');
    commentsNode.textContent = comments.length;
    card.append(commentsNode);
    fragment.append(card);
  });
  containerNode.append(fragment);
};

