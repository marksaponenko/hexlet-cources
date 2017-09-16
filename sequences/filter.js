// Функция filter

const filter = (func, html) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    if (func(head(items))) {
      return iter(tail(items), cons(head(items), acc));
    }
    return iter(tail(items), acc);
  };
  return iter(html, l());
};

// Функция извлекает из html тексты цитат и возвращает список цитат

const quotes = (html) => {
  const filtered = filter(element => is('blockquote', element), html);
  return map(element => value(element), filtered);
};
