import {renderPhotos} from './photo.js';
import {setUserFormSubmit, onhideForm} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(renderPhotos, showAlert);
setUserFormSubmit(onhideForm);

