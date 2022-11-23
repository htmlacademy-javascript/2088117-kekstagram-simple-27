import {isEscapeKey} from './util.js';

const body = document.querySelector('body');

const modalType = {
  success: 'success',
  error: 'error'
};

let openedMessage = '';

const onElementClick = () => {
  hideMessage();
};


const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showMessage = (type) => {
  openedMessage = type;
  const template = document.querySelector(`#${openedMessage}`).content.querySelector(`.${openedMessage}`);
  const message = template.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onElementClick);
  body.append(message);
  body.style.overflow = 'hidden';
};


function hideMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onElementClick);
  body.style.overflow = 'auto';
}

export {showMessage, modalType};

