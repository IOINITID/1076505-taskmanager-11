// Обработка формата времени
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

// Возвращает время в нужном формате
export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

// Получает случаное целое число в заданном диапазоне
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

// Возвращает случайный элемент массива
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

// Создает дом элемент из разметки
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export {getRandomIntegerNumber, getRandomArrayItem};
