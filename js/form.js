import {ESCAPEKEY} from './util.js';
import {resetScaleValue} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage, hideMessage} from './messages.js';

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
          showSuccessMessage();
          blockUploadButton(false);
        },
        () => {
          showErrorMessage();
          blockUploadButton(false);
        },
        new FormData(evt.target),
      );
    }
  });
};


const onModalFormEscKeydown = (evt) => {
  if (ESCAPEKEY(evt)) {
    evt.preventDefault();
    if (document.classList.contains('.error')){
      hideMessage();
    }
    onhideForm();
  }
};

function onUploadFileSubmit () {
  modalForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalFormEscKeydown);
  textareaField.value = '';
}

function onhideForm () {
  photoForm.reset();
  resetScaleValue();
  resetEffects();
  pristine.reset();
  modalForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalFormEscKeydown);
}


uploadFile.addEventListener('change', onUploadFileSubmit);
cancelButton.addEventListener('click', onhideForm);

export {setUserFormSubmit, onhideForm};
