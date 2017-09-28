// Здесь мы создаем виртуальную таблицу (структура данных - список),
// добавляем туда функции и достаем нужные.

// Создаем таблицу
let methods = l();

// Эта функия достает нужную реализацию из виртуальной таблицы
export const getMethod = (obj, methodName) => {
  const iter = (list) => {
    // Ищем нужную реализацию в таблице
    if (methodName === car(contents(head(list))) && typeTag(obj) === typeTag(head(list))) {
      return cdr(contents(head(list)));
    }

    return iter(tail(list));
  };
  return iter(methods);
};

// Добавляем в виртуальную таблицу данные
export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
