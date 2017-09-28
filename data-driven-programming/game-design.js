// В окончательной версии движка мы создаем карты и достаем имя и урон
// на основе классов

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // Терминальное условие. При его выполнении записываем последний лог
    if (health1 <= 0) {
      const prevLog = head(log);
      const newLog = {
        message: `${name1} был убит`,
        health1: prevLog.health1,
        health2: prevLog.health2,
      };
      return consList(newLog, log);
    }
    // Получаем из колоды карту, достаем имя, урон, вычисляем новое здоровье
    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    // Записываем лог
    const stats = { message };
    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }
    const newLog = consList(stats, log);
    // Рекурсивно вызываем iter, меняя параметры игроков в зависимости от order
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };
  // Начальные параметры
  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

// Запуск игры
export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
