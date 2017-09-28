// Иницилизируем карту
const defmethod = definer('SimpleCard');

// Конструктор карты
const make = (name, points) =>
  attach('SimpleCard', cons(name, points));

export default make;

// Добавляем данные в виртуальную таблицу, из которой будет выбираться необходимая функция
defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
