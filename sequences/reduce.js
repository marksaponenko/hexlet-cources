// Reduce

const reduce = (func, counter, html) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    return iter(tail(items), func(head(items), acc));
  };
  return iter(html, counter);
};

// Считаем количество пустых тегов по типу тега

const emptyTagsCount = (tagName, html) => reduce((element, acc) => {
  if (is(tagName, element)) {
    return value(element) === '' ? acc + 1 : acc;
  }
  return acc;
}, 0, html);
