/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает
на вход массив и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.

uniq([2, 1, 2, 3]); // [2, 1, 3]
*/

export default arr => arr.reduce((acc, value) =>
  (acc.includes(value) ? acc : acc.concat(value)), []);