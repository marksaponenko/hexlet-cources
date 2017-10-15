/*
Реализуйте и экспортируйте по умолчанию функцию buildHtml,
которая возвращает строковое представление html.

import buildHtml from './solution';

const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

buildHtml(data);

<html>
  <meta><title>hello, hexlet!</title></meta>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
*/

// Диспечеризация по типу элемента тега
const attrs = {
  body: i => typeof i === 'string',
  children: i => i instanceof Array,
  attributes: i => i instanceof Object,
};
// Получаем тип элемента
const getAttrName = elem => Object.keys(attrs).filter(i => attrs[i](elem))[0];
// Парсим attributes
const selectorsToStr = select => Object.keys(select).reduce((acc, elem) => `${acc} ${elem}="${select[elem]}"`, '');


const buildHtml = (html) => {
  const [first, ...rest] = html;
  const tag = rest.reduce((acc, value) => {
    // Выбираем, как обрабатывать элемент
    const attrMap = {
      body: i => i,
      attributes: i => selectorsToStr(i),
      children: i => i.map(buildHtml),
    };

    const attrName = getAttrName(value);
    return { ...acc, [attrName]: attrMap[attrName](value) };
  }, { name: first, attributes: '', body: '', children: [] });
  return `<${tag.name}${tag.attributes}>${tag.body}${tag.children.join('')}</${tag.name}>`;
};
export default buildHtml;
