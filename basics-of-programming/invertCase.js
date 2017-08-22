// Меняем регистр каждой буквы на противоположный

export default (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    newStr += str[i].toUpperCase() === str[i] ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return newStr;
};
