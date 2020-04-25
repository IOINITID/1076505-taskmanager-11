import AbstractComponent from "./abstract-component";

// Возвращает разметку блока сортировка
const createSortTemplate = () => {
  return (
    `<div class="board__filter-list">
          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
        </div>`
  );
};

// Класс сортировка
export default class Sort extends AbstractComponent {
  getTemplate() {
    return createSortTemplate();
  }
}
