// Список названий фильтров
const filterNames = [`all`, `overdue`, `favorites`, `repeating`, `archive`];

// Возвращает фильтры
const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      title: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};
