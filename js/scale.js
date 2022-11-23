const MINSCALE = 25;
const MAXSCALE = 100;
const SCALESTEP = 25;
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const image = imagePreview.querySelector('img');

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - SCALESTEP;
  if (newValue < MINSCALE) {
    newValue = MINSCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + SCALESTEP;
  if (newValue > MAXSCALE) {
    newValue = MAXSCALE;
  }
  scaleImage(newValue);
};

const resetScaleValue = () => {
  scaleImage(100);
};


smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScaleValue};
