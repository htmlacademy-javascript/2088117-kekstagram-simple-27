const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const image = imagePreview.querySelector('img');


const minScale = 25;
const maxScale = 100;
const scaleStep = 25;

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - scaleStep;
  if (newValue < minScale) {
    newValue = minScale;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + scaleStep;
  if (newValue > maxScale) {
    newValue = maxScale;
  }
  scaleImage(newValue);
};

const resetScaleValue = () => {
  scaleImage();
};


smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScaleValue};
