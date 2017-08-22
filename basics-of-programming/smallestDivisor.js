// Находим минимальный делитель числа рекурсивно
const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }
  const iter = (div) => {
    if (div > num ** 0.5) {
      return num;
    }
    if (num % div === 0) {
      return div;
    }
    return iter(div + 1);
  };
  return iter(2);
};

export default smallestDivisor;
