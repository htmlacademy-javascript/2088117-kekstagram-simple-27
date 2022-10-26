function checkLineWidth(string, number) {
  if (string <= number) {
    return true;
  } else {
    return false;
  }
}

checkLineWidth('сегодня понедельник', 140);

const likes = {
  MIN: 15,
  MAX: 20,
};

const comments = {
  MIN: 0,
  MAX: 200,
};

const id = {
  MIN: 1,
  MAX: 25,
};

const url = {
  MIN: 1,
  MAX: 25,
};

const descriptions = [
  'Это солнце. Оно горит.',
  'Сегодня я обедала в чудесном ресторане',
  'Качаюсь на качелях на берегу!!!!',
  'Уиииииии!',
  'Господи, почему все такое непонятное?',
  'А когда уже будет понятнее? -Никогда!',
  'Злобный закадровый смех',
  'Красные ананасы нашли мы в пустыне',
  'Выпьем?',
  'Снег, горы, любовь',
  'Главное правило в горах - не есть желтый снег',
  'Утки, у-у-у',
];

const photosCount = 10;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhotoDescription = () => ({
  id: getRandomPositiveInteger(id.MIN, id.MAX),
  url: `photos/${getRandomPositiveInteger(url.MIN, url.MAX)}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(likes.MIN, likes.MAX),
  comments: getRandomPositiveInteger(comments.MIN, comments.MAX),
});

const PhotoDescription = Array.from(
  { length: photosCount },
  createPhotoDescription
);

PhotoDescription();
