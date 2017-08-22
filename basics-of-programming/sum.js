// Найти сумму чисел, которые меньше 1-ого аргумента и делятся без остатка на 2-ой и 3-ий

export default (n, a, b) => {
  const iter = (counter, acc) => {
    if (counter >= n) {
      return acc;
    }
    if (counter % a === 0 || counter % b === 0) {
      return iter(counter + 1, acc + counter);
    }
    return iter(counter + 1, acc);
  };
  return iter(a > b ? b : a, 0);
};
