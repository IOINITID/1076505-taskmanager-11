import {createBoardTemplate} from "./components/board";
import {createFilterTemplate} from "./components/filter";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";
import {createTaskEditTemplate} from "./components/task-edit";
import {createTaskTemplate} from "./components/task";
import {createSiteMenuTemplate} from "./components/site-menu";
import {createSortTemplate} from "./components/sorting";
import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";

// Количество карточек
const TASK_COUNT = 20;
const SHOWING_TASK_COUNT_ON_START = 8;
const SHOWING_TASK_COUNT_BY_BUTTON = 8;

// Добавляет разметку в DOM дерево
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// Объявление контейнеров для добавления разметки
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// Присваивание функции для генерации данных
const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

// Добавление блока меню в DOM
render(siteHeaderElement, createSiteMenuTemplate());

// Добавление блока фильтр в DOM
render(siteMainElement, createFilterTemplate(filters));

// Добавление блока доска в DOM
render(siteMainElement, createBoardTemplate());

// Объявление контейнеров для добавления разметки
const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

// Добавление блока сортировка в DOM
render(boardElement, createSortTemplate(), `afterbegin`);

// Добавление блока карточки редактирования в DOM
render(taskListElement, createTaskEditTemplate(tasks[0]));

// Показывает количество карточек в начале
let showingTaskCount = SHOWING_TASK_COUNT_ON_START;

// Добавление блока карточек в DOM
tasks.slice(1, showingTaskCount).forEach((task) => {
  render(taskListElement, createTaskTemplate(task));
});

// Добавление блока карточки редактирования в DOM
render(boardElement, createLoadMoreButtonTemplate());

// Поучает кнопку загрузить еще
const loadMoreButton = boardElement.querySelector(`.load-more`);

// Обработчик события нажатия на кнопку загрузить еще
loadMoreButton.addEventListener(`click`, () => {
  // Получает количество карточек отображаемых изначально
  const prevTaskCount = showingTaskCount;

  // Увеличение счетчика отображаемых карточек
  showingTaskCount = showingTaskCount + SHOWING_TASK_COUNT_BY_BUTTON;

  // Добавление новых карточек
  tasks.slice(prevTaskCount, showingTaskCount).forEach((task) => {
    render(taskListElement, createTaskTemplate(task));
  });

  // Удаление кнопки загрузить еще по условию
  if (showingTaskCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
