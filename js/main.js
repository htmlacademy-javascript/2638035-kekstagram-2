const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = (commentId) => {
  const commentAvatar = `img/avatar-${ getRandomInteger(1, 7) }.svg`;
  const commentMessage = [
    'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула c фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const commentName = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  const comment = {
    id: commentId,
    avatar: commentAvatar,
    message: commentMessage[getRandomInteger(0, commentMessage.length - 1)],
    name: commentName[getRandomInteger(0, commentName.length - 1)],
  };

  return comment;
};

const genComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandomInteger(0, 30); i++){
    comments.push(createComment(i));
  }
  return comments;
};

const createImageDescription = (id) => {

  const descriptions = ['Any description', 'another description'];
  const like = getRandomInteger(15, 200);
  const photoIndex = id;
  const randomDescriptionIndex = getRandomInteger(0, descriptions.length - 1);
  return {
    id: id,
    url: `photos/${ photoIndex }.jpg`,
    description: descriptions[randomDescriptionIndex],
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

createImageList(25);
