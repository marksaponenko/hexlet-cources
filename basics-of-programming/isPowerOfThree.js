// Проверка, является ли число степенью тройки

export default (num) => {
  let current = num;
  if (current === 1) {
    return true;
  }
  while (current > 1) {
    if (current % 3 !== 0) {
      return false;
    }
    current /= 3;
  }
  return true;
};
