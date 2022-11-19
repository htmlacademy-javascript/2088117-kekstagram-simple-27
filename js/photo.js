const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoList = document.querySelector('.pictures');


const fragment = document.createDocumentFragment();

const renderPhotos = function (photos) {
  photos.forEach(({url, description, comments, likes}) => {

    const photo = photoTemplate.cloneNode(true);

    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.querySelector('.picture__comments').textContent = comments;
    photo.querySelector('.picture__likes').textContent = likes;

    fragment.append(photo);
    photoList.append(fragment);
  });
};


export {renderPhotos};
