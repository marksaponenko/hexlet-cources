// Тест на простоту
import smallestDivisor from './smallestDivisor';

export default (num) => {
  if (num <= 1) {
    return false;
  }
  return smallestDivisor(num) === num;
};
