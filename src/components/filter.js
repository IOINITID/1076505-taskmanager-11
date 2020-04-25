import AbstractComponent from "./abstract-component";

// Возвращает разметку блока элемент фильтра
const createFilterMarkup = (filter, isChecked) => {
  // Деструктурирует полученные данные
  const {title, count} = filter;

  return (
    `<input
      type="radio"
      id="filter__${title}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${count ? `` : `disabled`}
    />
    <label for="filter__${title}" class="filter__label">
    ${title} <span class="filter__${title}-count">${count}</span></label
    >`
  );
};

// Возвращает разметку блока фильтр
const createFilterTemplate = (filters) => {
  // Возвращает разметку с элементами фильтра
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
    ${filtersMarkup}
  </section>`
  );
};

// Класс фильтр
export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
