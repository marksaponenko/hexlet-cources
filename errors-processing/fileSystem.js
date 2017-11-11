/* Реализуйте следующие возможности файловой системы HexletFs:
unlinkSync(path)

Удаляет файл (в реальной фс все чуть сложнее, см. hard link).

Возможные ошибки:

    ENOENT - файл не найден
    EPERM - операция не разрешена. Такая ошибка возникает в случае, если path это директория

writeFileSync(path, content)

Записывает content в файл по пути path.

Возможные ошибки:

    ENOENT - родительская директория, в которой нужно создать файл, не существует
    EISDIR - path является директорией

readFileSync(path)

Читает содержимое файла по пути path.

    ENOENT - файл не найден
    EISDIR - path является директорией
*/

import path from 'path';
import errors from 'errno'; // eslint-disable-line
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
      return [null, errors.code.ENOENT];
    }
    return [current.getMeta().getStats(), null];
  }

  unlinkSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);

    const current = this.findNode(filepath);

    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EPERM];
    }

    return [parent.removeChild(base), null];
  }

  writeFileSync(filepath, content) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    const current = this.findNode(filepath);

    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (current && current.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [parent.addChild(base, new File(base, content)), null];
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);

    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EISDIR];
    }

    return [current.getMeta().getBody(), null];
  }

  mkdirpSync(filepath) {
    const iter = (parts, subtree) => {
      if (parts.length === 0) {
        return [subtree, null];
      }
      const [part, ...rest] = parts;
      const current = subtree.getChild(part);
      if (!current) {
        return iter(rest, subtree.addChild(part, new Dir(part)));
      }
      if (current.getMeta().isFile()) {
        return [null, errors.code.ENOTDIR];
      }

      return iter(rest, current);
    };
    const parts = getPathParts(filepath);
    return iter(parts, this.tree);
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (parent.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [parent.addChild(base, new File(base, '')), null];
  }

  readdirSync(filepath) {
    const dir = this.findNode(filepath);
    if (!dir) {
      return [null, errors.code.ENOENT];
    } else if (dir.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [dir.getChildren().map(child => child.getKey()), null];
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
