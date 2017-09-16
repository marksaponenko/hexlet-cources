// Необходимо вернуть список тэгов в соответствии с запросом query

const select = (query, html) => reduce((element, acc) => {
  if (is(head(query), element)) {
    if (isEmpty(tail(query))) {
      return concat(l(element), acc);
    }

    if (hasChildren(element)) {
      return concat(select(tail(query), children(element)), acc);
    }
    return acc;
  }

  if (hasChildren(element)) {
    return concat(select(query, children(element)), acc);
  }
  return acc;
}, l(), html);
