// Проверка, является ли число членом списка

const has = (list, num) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === num) {
    return true;
  }
  return has(tail(list), num);
};

// Переворот списка

const reverse = (list) => {
  const iter = (counter, acc) => {
    if (isEmpty(counter)) {
      return acc;
    }
    return iter(tail(counter), cons(head(counter), acc));
  };
  return iter(list, l());
};

// Объединение списков

const concat = (list1, list2) => {
  const reversedList = reverse(list1);
  const iter = (counter, acc) => {
    if (isEmpty(counter)) {
      return reverse(acc);
    }
    return iter(tail(counter), cons(head(counter), acc));
  };
  return iter(list2, reversedList);
};
