/* Реализуйте следующие возможности файловой системы HexletFs:
mkdirpSync(path)

Создает директории рекурсивно (в отличие от mkdir).

    Если в пути встречается файл, то возвращает false, т.к. нельзя создать директорию внутри файла.
    Если все отработало корректно, то возвращается true

touchSync(path)

Эта функция обновляет (в метаданных) время доступа к файлу и, как побочный эффект,
создает файл, в случае его отсутствия. По этой причине команду touch часто
используют как способ создать файл. В данном упражнении она делает только это.

    Если в пути встречается файл, то возвращает false, т.к. нельзя создать файл внутри файла
    Если все отработало корректно, то возвращается true

readdirSync(path)

Возвращает список файлов (и папок) указанной директории.

    Если директории не существует, то возвращает false
    Если передан файл, то возвращает false

rmdirSync(path)

Удаляет директорию.

    Если передан файл, то возвращает false и ничего не удаляет
    Если директории не существует, то возвращает false
    Если директория непустая, то возвращает false
    Если все отработало корректно, то возвращается true
*/

import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line


const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);

    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  mkdirpSync(filepath) {
    const pathAsArr = getPathParts(filepath);
    return pathAsArr.reduce((acc, value) => {
      if (!acc) {
        return false;
      }
      const child = acc.getChild(value);
      if (child && child.getMeta().isFile()) {
        return false;
      } else if (child && child.getMeta().isDirectory()) {
        return child;
      }

      return acc.addChild(value, new Dir(value));
    }, this.tree);
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new File(base));
  }

  readdirSync(filepath) {
    const node = this.findNode(filepath);
    if (!node || node.getMeta().getStats().isFile()) {
      return false;
    }
    return node.getChildren().map(child => child.getKey());
  }

  rmdirSync(filepath) {
    const node = this.findNode(filepath);
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!node || node.getMeta().getStats().isFile() || node.hasChildren()) {
      return false;
    }
    parent.removeChild(base);
    return true;
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
