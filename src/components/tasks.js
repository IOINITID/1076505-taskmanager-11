import AbstractComponent from "./abstract-component";

// Возвращает разметку блока задачи
const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

// Класс задачи
export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksTemplate();
  }
}
