import {renderPhotos} from './photo.js';
import {setUserFormSubmit, hideForm} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(renderPhotos, showAlert);
setUserFormSubmit(hideForm);

