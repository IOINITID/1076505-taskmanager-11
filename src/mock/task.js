import {COLORS} from "../const.js";
import {getRandomIntegerNumber, getRandomArrayItem} from "../utils.js";

// Описание карточек
const DescriptionItems = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

// Повторяющиеся дни
const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

// Получает случайную дату в диапазоне неделю до или неделю после текущей даты
const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

// Случайно генерирует повторяющиеся дни
const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "mo": Math.random() > 0.5,
  });
};

// Возвращает объект для задачи
const generateTask = () => {
  // Получает дату выполнения по условию
  const dueDate = Math.random > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? generateRepeatingDays() : DefaultRepeatingDays,
    color: getRandomArrayItem(COLORS),
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

// Возвращает заданное количество задач
const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};

export {generateTask, generateTasks};
