/* Реализуйте функцию extract, которая принимает на вход список тегов
и возвращает список ссылок извлеченных из этих тегов.

const tags = l(
  make('a', { href: '/about' }),
  make('img', { src: '/avatar.jpeg' }),
  make('link', { href: '/favicon.ico' }),
);

extract(tags); // => ('/about', '/avatar.jpeg', '/favicon.ico')
*/

const attrName = {
  a: 'href',
  link: 'href',
  img: 'src',
};

const extract = tags => map(elem => getAttribute(attrName[getName(elem)], elem), tags);
