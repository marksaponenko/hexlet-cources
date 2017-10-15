/*
Текущая версия htmlBuilder должна уметь работать с одиночными тегами.
Список тегов, которые являются одиночными, находится в singleTagsList.

Пример:

// <br>
['br'];

// <img src="/path">
['img', { src: '/path' }];

solution.js

Реализуйте и экспортируйте функции parse и render.

    Функция render принимает на вход ast и возвращает строковое представление.
    Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.

const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}

*/

import { find, identity } from 'lodash'; // eslint-disable-line

const singleTagsList = new Set(['hr', 'img', 'br']);
// Поменяли реализацию диспечеризации
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];
// Ищем тип элемента тега
const getPropertyAction = arg => find(propertyActions, ({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
// Превращаем DSL в AST - дерево
export const parse = (data) => {
  const switchArg = {
    body: identity,
    attributes: identity,
    children: i => i.map(parse),
  };

  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };

  return rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: switchArg[name](arg) };
    }, root);
};
// Парсим AST дерево в строку
export const render = (ast) => {
  if (singleTagsList.has(ast.name)) {
    return [`<${ast.name}${buildAttrString(ast.attributes)}>`].join('');
  }
  return [`<${ast.name}${buildAttrString(ast.attributes)}>`,
    `${ast.body}${ast.children.map(render).join('')}`,
    `</${ast.name}>`,
  ].join('');
};
