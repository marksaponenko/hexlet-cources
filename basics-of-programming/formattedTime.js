// Функция принимает на вход количество минут и возвращает время в формате чч:мм

export default (min) => {
  const hours = min >= 600 ? Math.floor(min / 60) : `0${Math.floor(min / 60)}`;
  const minutes = min % 60 >= 10 ? min % 60 : `0${min % 60}`;
  return `${hours}:${minutes}`;
};
