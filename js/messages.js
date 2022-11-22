import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');
const body = document.querySelector('body');


const onElementClick = () => {
  hideMessage();
};


const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showMessage = function () {
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onElementClick);
  body.style.overflow = 'hidden';
};

const showSuccessMessage = function () {
  const successMessage = successTemplate.cloneNode(true);
  showMessage();
  successButton.addEventListener('click', onElementClick);
  body.append(successMessage);
};

const showErrorMessage = function () {
  const errorMessage = errorTemplate.cloneNode(true);
  showMessage();
  errorButton.addEventListener('click', onElementClick);
  body.append(errorMessage);
};

function hideMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onElementClick);
  errorButton.removeEventListener('click', onElementClick);
  successButton.removeEventListener('click', onElementClick);
  body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};


