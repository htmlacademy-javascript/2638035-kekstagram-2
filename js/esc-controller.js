const windows = [];

let listener = null;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const lastWindow = windows.length - 1;
    if (windows[lastWindow].condition && !windows[lastWindow].condition()) {
      return;
    }
    windows[lastWindow].closeWindow();
    windows.length -= 1;
    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscControl = (closeWindow, condition = null) => {
  windows.push({
    closeWindow,
    condition
  });
  if (!listener){
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscControl = () => {
  windows.length -= 1;
  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
