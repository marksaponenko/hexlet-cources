// Находим минимальный делитель числа итеративно
export default (num) => {
  if (num < 1) {
    return NaN;
  } else if (num === 1) {
    return num;
  }
  let div = 2;
  while (div <= num ** 0.5) {
    if (num % div === 0) {
      return div;
    }
    div += 1;
  }
  return num;
};
