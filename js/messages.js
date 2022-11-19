import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');
const body = document.querySelector('body');

const onSuccessButtonClick = () => {
  hideMessage();
};

const onErrorButtonClick = () => {
  hideMessage();
};

const onOverlayClick = () => {
  hideMessage();
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = function () {
  const successMessage = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButton.addEventListener('click', onSuccessButtonClick);
  body.append(successMessage);
  body.style.overflow = 'hidden';
};

const showErrorMessage = function () {
  const errorMessage = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  body.append(errorMessage);
  body.style.overflow = 'hidden';
};

function hideMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  successButton.addEventListener('click', onSuccessButtonClick);
  body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};
