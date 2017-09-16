// Функция map
const map = (func, html) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };
  return iter(html, l());
};

// Функция переворачивает содержимое тегов

const mirror = html => map(element => node(name(element), reverseStr(value(element))), html);
