/*
Реализуйте и экспортируйте функцию по умолчанию, задача которой,
оздавать объект подходящего типа. Типы: SingleTag и PairedTag.
Список имен тегов, которые относятся к SingleTag: hr, br, img.

Реализуйте типы тегов со следующим интерфейсом:

    Конструктор, который принимает на вход: name, attributes, body, children.
    Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
*/

import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';
// Диспечеризация по типу элемента тега и выбор реализации его
// преобразования при обходе коллекции
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: _.identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: _.identity,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));
// Парсим DSL, создаем объект с данным и передаем значения в buildNode
const parse = (data) => {
  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };
  const tag = rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);

  return buildNode(tag.name, tag.attributes, tag.body, tag.children);
};
export default parse;
