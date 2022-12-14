const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const photoForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview');
const image = imagePreview.querySelector('img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let currentEffect = EFFECTS[0];

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (currentEffect === EFFECTS[0]) {
    sliderElement.classList.add('hidden');
  }
};

const onFormClick = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (currentEffect === EFFECTS[0]) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  image.className = `effects__preview--${currentEffect.name}`;
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  currentEffect = EFFECTS[0];
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range:{
    min: EFFECTS[0].min,
    max: EFFECTS[0].max,
  },
  start: EFFECTS[0].max,
  step: EFFECTS[0].step,
  connect: 'lower',
});
updateSlider();

photoForm.addEventListener('change', onFormClick);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
