// Обработка формата времени
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

// Возвращает время в нужном формате
export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};
