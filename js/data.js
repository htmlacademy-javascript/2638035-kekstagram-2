import { getRandomInteger } from './util.js';

const COMMENT_MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула c фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENT_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const MIN_COMMENT = 0;
const MAX_COMMENT = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const IMAGE_DESCRIPTIONS = ['Any description', 'another description'];

const createComment = (commentId) => {
  const commentAvatar = `img/avatar-${ getRandomInteger(1, 7) }.svg`;
  const comment = {
    id: commentId,
    avatar: commentAvatar,
    message: COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)],
    name: COMMENT_NAMES[getRandomInteger(0, COMMENT_NAMES.length - 1)],
  };
  return comment;
};
const genComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandomInteger(MIN_COMMENT, MAX_COMMENT); i++){
    comments.push(createComment(i));
  }
  return comments;
};
const createImageDescription = (id) => {
  const like = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const photoIndex = id;
  const randomDescriptionIndex = getRandomInteger(0, IMAGE_DESCRIPTIONS.length - 1);
  return {
    id: id,
    url: `photos/${ photoIndex }.jpg`,
    description: IMAGE_DESCRIPTIONS[randomDescriptionIndex],
    likes: like,
    comments: genComments()
  };
};
const createImageList = (quantity) => {
  const dataArray = [];
  for (let i = 1; i < quantity + 1; i++) {
    const newImage = createImageDescription(i);
    dataArray.push(newImage);
  }
  return dataArray;
};
export {createImageList};
