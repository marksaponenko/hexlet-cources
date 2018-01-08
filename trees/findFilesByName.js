// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое
// дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку.

const findFilesByName = (tree, substr) => {
  const iter = (node, currentPath, acc) => {
    console.log(node);
    console.log(currentPath);
    console.log(acc);
    console.log(node.type === 'file');
    if (node.type === 'file') {
      return node.name.indexOf(substr) >= 0 ? [...acc, currentPath] : acc;
    }

    return node.children.reduce((cAcc, nn) => {
      const newPath = `${currentPath}/${nn.name}`;
      return iter(nn, newPath, cAcc);
    }, acc);
  };
  return iter(tree, '', []);
};
export default findFilesByName;
