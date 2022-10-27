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
  'Красное, голубое, зеленое...',
  'Как сказал когда-то сам знаете кто',
  '34 октября',
  'Из древности к нам приходят они в тумане!',
  'Ай-копирайтер написал этот текст',
  'Двенадцать месяцев из 356 дней',
  'Два месяца до Нового года',
  'Осень',
  'Из 15 лет один день я не видел тебя',
  'Цифровизация промышленности все глубже проникает в нашу реальность',
  'Двести двенадцать',
  'Шесть шестых и бантик сбоку',
  'Бесплатный массаж от уютных котиков',
  'Солнце и я, еще бы море не штормило',
  'Никогда не разговаривайте с незнакомцами',
  'Я обиделась',
  'Совет просто огонь!',
  'Что за гадость эта ваша заливная рыба',
  'Какадебака - вот что это',
];

const photosCount = 25;

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

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(likes.MIN, likes.MAX),
  comments: getRandomPositiveInteger(comments.MIN, comments.MAX),
});

const getPhotoDescription = () => Array.from(
  { length: photosCount }, (_, PhotoDescriptionIndex) =>
  createPhotoDescription(PhotoDescriptionIndex +1)
);

getPhotoDescription();
