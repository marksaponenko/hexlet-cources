// Тэгируем данные
const attach = (tag, data) => cons(tag, data);

// Достаем тип тэга
const typeTag = taggedData => car(taggedData);

// Достаем данные
const contents = taggedData => cdr(taggedData);
