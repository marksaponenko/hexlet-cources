// Проверка, является ли слово палиндромом

const isPalindrome = (str) => {
  const start = 0;
  const end = str.length - 1;

  if (str.length <= 1) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return isPalindrome(str.substring(start + 1, end));
};
