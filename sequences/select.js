// Необходимо вернуть список тэгов в соответствии с запросом query

const select = (query, html) => reduce((element, acc) => {
  // Проверяем, является ли тэг головой query
  if (is(head(query), element)) {
    // Если query пуст, складываем тэг в аккумулятор
    if (isEmpty(tail(query))) {
      return concat(l(element), acc);
    }
    // Если нет, то при наличии потомков, рекурсивно вызываем функцию
    if (hasChildren(element)) {
      return concat(select(tail(query), children(element)), acc);
    }
    // Если потомков нет, двигаемся дальше
    return acc;
  }
  // Если тэг не является головой query, то при наличии потомков у тэга, двигаемся вглубь тэга
  if (hasChildren(element)) {
    return concat(select(query, children(element)), acc);
  }
  // Если потомков нет, смотрим следующий элемент
  return acc;
}, l(), html);
