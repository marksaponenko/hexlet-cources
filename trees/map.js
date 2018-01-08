/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
 функцию-обработчик и дерево, а возвращает отображенное дерево.

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
const actual = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
*/

const map = (f, tree) => {
  if (tree.type === 'directory') {
    return { ...f(tree), children: tree.children.map(c => map(f, c)) };
  }
  return f(tree);
};
export default map;
