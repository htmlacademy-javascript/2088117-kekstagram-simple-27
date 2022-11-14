import {isEscapeKey} from './util.js';
import {checkLineWidth} from './check-line.js';

const photoForm = document.querySelector('.img-upload__form');
const modalForm = photoForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = photoForm.querySelector('#upload-file');
const cancelButton = modalForm.querySelector('#upload-cancel');
const commentField = modalForm.querySelector('.img-upload__text');
const textareaField = commentField.querySelector('.text__description');


const pristine = new Pristine(commentField, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});


const validForm = function () {
  photoForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    const commentLength = textareaField.value;
    const maxCommentLength = 140;
    const isGood = checkLineWidth(commentLength, maxCommentLength);
    if (!isValid || !isGood) {
      evt.preventDefault();
    }
  });
};


const onModalFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModalForm();
  }
};

function showModalForm () {
  modalForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalFormEscKeydown);
  textareaField.value = '';
}

function hideModalForm () {
  photoForm.reset();
  pristine.reset();
  modalForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalFormEscKeydown);
}

const showForm = function() {
  uploadFile.addEventListener('change', () => {
    showModalForm();
  });
};

const hideForm = function() {
  cancelButton.addEventListener('click', () => {
    hideModalForm();
  });
};


export {showForm, hideForm, validForm};
