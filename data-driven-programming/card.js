// Обобщенный модуль объекта "карта"

// С помощью динамической диспечеризации мы получаем имя и урон карты

// Функция getMethod обращается к виртуальной таблице и возвращает нужную функцию,
// которая вызывается с данными карты и отдает имя/урон
export const getName = self =>
  getMethod(self, 'getName')(contents(self));

export const damage = (self, health) =>
  getMethod(self, 'damage')(contents(self), health);
