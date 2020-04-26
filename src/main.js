import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import FilterComponent from "./components/filter";
import SiteMenuComponent from "./components/site-menu";
import {generateTasks} from "./mock/task";
import {generateFilters} from "./mock/filter";
import {render, RenderPosition} from "./utils/render";

// Количество задач
const TASK_COUNT = 20;

// Объявление контейнеров для добавления разметки
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// Присваивание функции для генерации данных
const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
