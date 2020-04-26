import AbstractComponent from "./abstract-component";

// Возвращает разметку блока доска
const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

// Класс доски
export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}
