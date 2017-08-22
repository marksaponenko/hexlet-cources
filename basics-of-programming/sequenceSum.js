// Находим сумму последовательности целых чисел
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }

  if (begin > end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};
