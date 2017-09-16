// Разрабатываем игровой движок карточной игры

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // Карта - это пара имя-урон
    const card = random(cards);
    const damage = cdr(card)();
    const cardName = car(card);
    const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
    // Если кто-то убит, обновляем лог и выходим из игры
    if (health2 <= 0) {
      return consList(cons(cons(health1, health2), 'The end'), log);
    }
    // В зависимости от того, чей ход, рекурсивно вызываем iter
    // Лог записываем в формате cons(cons(health1, health2), message)
    if (order === 1) {
      return iter(health1, name1, health2 - damage, name2, 2, consList(cons(cons(health1, health2 - damage), message), log));
    }
    return iter(health2, name2, health1 - damage, name1, 1, consList(cons(cons(health1 - damage, health2), message), log));
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
