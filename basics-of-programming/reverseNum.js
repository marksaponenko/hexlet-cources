// Переворачиваем цифры в числе

const reverseNum = (num) => {
  const numToStr = String(num);
  let result = '';
  for (let i = numToStr.length - 1; i >= 0; i -= 1) {
    result += numToStr[i];
  }
  return Number(result);
};

export default num => (num > 0 ? reverseNum(num) : -reverseNum(Math.abs(num)));
