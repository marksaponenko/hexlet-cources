// Наибольший общий делитель двух чисел

const gcd = (m, n) => {
  if (m % n === 0) {
    return n;
  } else if (m > n) {
    return gcd(n, m % n);
  }
  return gcd(m, n % m);
};
