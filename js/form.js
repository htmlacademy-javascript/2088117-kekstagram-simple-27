import {isEscapeKey} from './util.js';
import {resetScaleValue} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';
import {showMessage, MODAL_TYPE} from './messages.js';

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

function blockUploadButton () {
  uploadButton.disabled = true;
  uploadButton.disabled = false;
}

const setUserFormSubmit = (onSuccess) => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockUploadButton(true);
      sendData(
        () => {
          onSuccess();
          showMessage(MODAL_TYPE.success);
          blockUploadButton(false);
        },
        () => {
          showMessage(MODAL_TYPE.error);
          blockUploadButton(false);
        },
        new FormData(evt.target),
      );
    }
  });
};

function isErrorMessageOpen() {
  return document.querySelectorAll('.error').length > 0;
}

function onModalFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (isErrorMessageOpen()) {
      return;
    }
    onFormClose();
  }
}

function onUploadFileSubmit () {
  modalForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalFormEscKeydown);
  textareaField.value = '';
}

function onFormClose () {
  photoForm.reset();
  resetScaleValue();
  resetEffects();
  pristine.reset();
  modalForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalFormEscKeydown);
}


uploadFile.addEventListener('change', onUploadFileSubmit);
cancelButton.addEventListener('click', onFormClose);

export {setUserFormSubmit, onFormClose, onUploadFileSubmit};
