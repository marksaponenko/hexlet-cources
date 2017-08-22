// Делаем первую букву в каждом слове заглавной

export default (str) => {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i += 1) {
    if (str[i - 1] === ' ') {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
