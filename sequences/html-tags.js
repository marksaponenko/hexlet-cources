// Реализация базового интерфейса для создания html

// Конструктор
export const make = () => l();

// Создание тега
export const node = (name, value) => cons(name, value);

// Селекторы
export const name = tag => car(tag);
export const value = tag => cdr(tag);

// Добавление элементов в структуру
export const append = (html, tag) => consList(tag, html);

// Строковое представление
export const toString = (html) => {
  const element = tag => `<${name(tag)}>${value(tag)}</${name(tag)}>`;
  const iter = (counter, acc) => {
    if (isEmpty(counter)) {
      return acc;
    }
    return iter(tail(counter), element(head(counter)) + acc);
  };
  return iter(html, '');
};
