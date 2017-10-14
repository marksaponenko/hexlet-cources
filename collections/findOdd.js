/* Дан массив чисел. Каждое число в массие встречается четное количество раз, кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает
массив чисел и возвращает число, который встречается нечетное количество раз.

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

// 5
findOdd(numbers);*/

export default (arr) => {
  const map = arr.reduce((acc, value) => {
    if (!acc.has(value)) {
      return acc.set(value, 1);
    }
    return acc.set(value, acc.get(value) + 1);
  }, new Map());

  let result;
  map.forEach((value, key) => {
    if (value % 2 !== 0) {
      result = key;
    }
  });
  return result;
};
