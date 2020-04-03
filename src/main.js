import {createSiteMenuTemplate} from "./components/site-menu";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createSortingTemplate} from "./components/sorting";
import {createTaskEditTemplate} from "./components/task-edit";
import {createTaskTemplate} from "./components/task";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";

// Количество карточек
const TASK_COUNT = 3;

// Добавляет разметку в DOM дерево
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// Объявление контейнеров для добавления разметки
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// Добавление блока меню в DOM
render(siteHeaderElement, createSiteMenuTemplate());

// Добавление блока фильтр в DOM
render(siteMainElement, createFilterTemplate());

// Добавление блока доска в DOM
render(siteMainElement, createBoardTemplate());

// Объявление контейнеров для добавления разметки
const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

// Добавление блока сортировка в DOM
render(boardElement, createSortingTemplate(), `afterbegin`);

// Добавление блока карточки редактирования в DOM
render(taskListElement, createTaskEditTemplate());

// Добавление блока карточек в DOM
for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

// Добавление блока карточки редактирования в DOM
render(boardElement, createLoadMoreButtonTemplate());
