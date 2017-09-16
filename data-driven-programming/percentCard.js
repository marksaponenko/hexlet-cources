// Конструктор карты
const make = (name, percent) =>
  attach('PercentCard', cons(name, percent));

// Достаем имя
const getName = self => car(contents(self));

// Достаем урон
const damage = (self, health) =>
  Math.round(health * (cdr(contents(self)) / 100));
