// Рекурсивный переворот строки

export default (str) => {
  const iter = (string, acc, counter) => {
    if (counter < 0) {
      return acc;
    }
    return iter(string.substr(0, counter), acc + string[counter], counter - 1);
  };
  return iter(str, '', str.length - 1);
};
