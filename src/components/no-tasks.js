import AbstractComponent from "./abstract-component";

const createNoTasksTemplate = () => {
  return (
    `<p class="board__no-tasks">
    Click «ADD NEW TASK» in menu to create your first task
  </p>`
  );
};

// Класс нет задач
export default class NoTasks extends AbstractComponent {
  getTemplate() {
    return createNoTasksTemplate();
  }
}
