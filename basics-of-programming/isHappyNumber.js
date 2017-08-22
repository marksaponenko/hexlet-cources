// Проверка. является ли число счастливым. Счастливое - то число, которое в результате
// ряда преобразований вида "сумма квадратов цифр" превратится в единицу.

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

export default (num) => {
  let current = num;
  let counter = 0;
  while (counter <= 10) {
    if (sumDigits(current) === 1) {
      return true;
    }
    current = sumDigits(current);
    counter += 1;
  }
  return false;
};
