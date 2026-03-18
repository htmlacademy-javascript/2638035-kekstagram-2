export const MAX_DESCRIPTION = 140;
export const COMMENTS_STEP = 5;
export const HASHTAG = /^#[a-zа-я0-9ё]{1,19}$/i;
export const MAX_HASHTAGS = 5;
export const ALERT_DELAY = 5000;
export const WINDOW_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
};
export const SUBMIT_TEXTS = {
  ACTIVE: 'Опубликовать',
  DISABLED: 'Публикую...'
};
export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
  DEFAULT: 100
};
export const EFFECTS = {
  HEAT:'heat',
  PHOBOS:  'phobos',
  MARVIN: 'marvin',
  SEPIA: 'sepia',
  CHROME: 'chrome',
  NONE: 'none'
};

export const Effects = {
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    units: '',
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    units: '',
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    units: '',
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    units: '%',
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    units: 'px',
  },
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 80,
      step: 1,
      connect: 'lower',
    },
    style: '',
    units: '',
  },
};
