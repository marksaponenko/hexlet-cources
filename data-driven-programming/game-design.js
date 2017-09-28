// В этом уроке мы узучили объекты(тип данных) и теперь имя и урон карты
// достаем из объекта, также лог формируем на основании объекта.

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      // Тут неоптимальное решение, пришлось привязаться к имени проигравшего,
      // решение учителя
      // if (health1 <= 0) {
      // const prevLog = head(log);
      // const newLog = {
      // message: `${name1} был убит`,
      // health1: prevLog.health1,
      // health2: prevLog.health2,
      // };
      // return consList(newLog, log);
    // }
      const finalLog = {
        health1: name1 === 'Ada' ? health2 : health1,
        health2: name1 === 'Ada' ? health1 : health2,
        message: `${name1} был убит`,
      };

      return consList(finalLog, log);
    }

    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    const stats = {
      health1: order === 1 ? health1 : newHealth,
      health2: order === 1 ? newHealth : health1,
      message,
    };

    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
