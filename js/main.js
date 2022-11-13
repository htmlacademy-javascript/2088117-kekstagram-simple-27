import {getPhotoDescription} from './data.js';
import {checkLineWidth} from './check-line.js';
import {renderPhotos} from './photo.js';
//import '.form.js';
import {isEscapeKey} from './util.js';

getPhotoDescription();
checkLineWidth();
renderPhotos();


const photoForm = document.querySelector('.img-upload__form');
const modalForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

const pristine = new Pristine(photoForm, {
  classTo: 'img-upload__form__element',
  errorTextParent: 'img-upload__form__element',
  errorTextClass: 'img-upload__form__error-text',
});

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
}

function hideModalForm () {
  //modalForm.reset(); Зачем тут эта штука?
  pristine.reset();
  modalForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalFormEscKeydown);
}

uploadFile.addEventListener('change', () => {
  showModalForm();
});

cancelButton.addEventListener('click', () => {
  hideModalForm();
});


