import { HASHTAG, MAX_DESCRIPTION, MAX_HASHTAGS } from './constants.js';

const form = document.querySelector('#upload-select-image');
const descriptionNode = document.querySelector('.text__description');
const hashtagNode = document.querySelector('.text__hashtags');

const validation = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item)=>item.length);

const checkDescription = (text) => text.trim().length <= MAX_DESCRIPTION;

const checkHashtag = (text) => {
  if (!text.trim().length) {
    return true;
  }
  const words = getHashtags(text);
  return words.every((item)=> HASHTAG.test(item));
};

const checkHashtagsLength = (text) => {
  if (!text.trim().length) {
    return true;
  }
  const hashtags = getHashtags(text);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniqueHashtags = (text) => {
  if (!text.trim().length) {
    return true;
  }
  const hashtags = getHashtags(text);
  const uniqueHashtags = [...new Set(hashtags)];
  return uniqueHashtags.length === hashtags.length;
};

validation.addValidator(
  descriptionNode,
  checkDescription,
  `Лимит ${MAX_DESCRIPTION} символов превышен!`
);

validation.addValidator(
  hashtagNode,
  checkHashtag,
  'Неправильный хештег!'
);

validation.addValidator(
  hashtagNode,
  checkHashtagsLength,
  `Лимит максимального количества хештегов ${MAX_HASHTAGS} превышен!`
);

validation.addValidator(
  hashtagNode,
  checkUniqueHashtags,
  'Хэштеги не должны повторяться!'
);

export const isValid = () => validation.validate();

export const resetValidation = () => {
  validation.reset();
};
