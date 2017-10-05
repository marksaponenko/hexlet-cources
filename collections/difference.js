/* Реализуйте и экспортируйте функцию по-умолчанию, которая принимает
на вход два множества и возвращает множество, составленное из таких элементов,
которые есть в первом множестве, но нет во втором.

difference(new Set([2, 1]), new Set([2, 3]));
// → [1]
*/

export default (set1, set2) => {
  const arr = Array.from(set1).filter(value => !set2.has(value));
  return new Set(arr);
};
