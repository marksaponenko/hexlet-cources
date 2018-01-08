/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход директорию,
приводит имена всех файлов в этой директории к нижнему регистру и возвращает ее наружу.*/

const downcaseFileNames = (tree) => {
  console.log(tree);
  if (tree.type === 'file') {
    return { ...tree, name: tree.name.toLowerCase() };
  }
  return { ...tree, children: tree.children.map(downcaseFileNames) };
};
export default downcaseFileNames;
