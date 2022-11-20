import {isEscapeKey} from './util.js';
import {resetScaleValue} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const photoForm = document.querySelector('.img-upload__form');
const modalForm = photoForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = photoForm.querySelector('#upload-file');
const cancelButton = modalForm.querySelector('#upload-cancel');
const commentField = modalForm.querySelector('.img-upload__text');
const textareaField = commentField.querySelector('.text__description');
const uploadButton = modalForm.querySelector('.img-upload__submit');


const pristine = new Pristine(commentField, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const blockUploadButton = () => {
  uploadButton.disabled = true;
};

const unblockUploadButton = () => {
  uploadButton.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockUploadButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessage();
          unblockUploadButton();
        },
        () => {
          showErrorMessage();
          unblockUploadButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

const onModalFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideForm();
  }
};

function onUploadFileSubmit () {
  modalForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalFormEscKeydown);
  textareaField.value = '';
}

function hideForm () {
  photoForm.reset();
  resetScaleValue();
  resetEffects();
  pristine.reset();
  modalForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalFormEscKeydown);
}


uploadFile.addEventListener('change', onUploadFileSubmit);
cancelButton.addEventListener('click', hideForm);

export {setUserFormSubmit, hideForm};
