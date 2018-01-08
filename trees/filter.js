/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
 предикат и дерево, а возвращает отфильтрованное дерево по предикату.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
const actual = filter(n => n.type === 'directory', tree);
*/


const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }
  return { ...tree, children: tree.children.map(c => filter(f, c)).filter(v => v) };
};
export default filter;
