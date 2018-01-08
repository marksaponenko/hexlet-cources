/*
Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx'),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
reduce((acc, n) => acc + 1, tree, 0); // => 6

*/

const reduce = (f, tree, acc) => {
  const newAcc = f(acc, tree);
  if (tree.type === 'file' || tree.children.length === 0) {
    return newAcc;
  }
  return tree.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};
