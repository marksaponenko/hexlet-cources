// Иницилизируем карту
const defmethod = definer('PercentCard');

// Конструктор карты
const make = (name, points) =>
  attach('PercentCard', cons(name, points));

export default make;

// Добавляем данные в виртуальную таблицу, из которой будет выбираться необходимая функция
defmethod('getName', self => car(self));

defmethod('damage', (self, health) =>
  Math.round(health * (cdr(self) / 100)));
