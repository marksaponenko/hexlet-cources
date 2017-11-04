import path from 'path';
import Tree from 'hexlet-trees';

const getPathParts = filepath => path.normalize(filepath)
  .split(path.sep)
  .filter(value => value !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }


  mkdirSync(filepath) {
    const parentPath = path.parse(filepath).dir;

    const parent = this.findNode(parentPath);

    const key = path.parse(filepath).base;
    return parent.addChild(key, { type: 'dir' });
  }

  touchSync(filepath) {
    const parentPath = path.parse(filepath).dir;
    const parent = this.findNode(parentPath);
    const key = path.parse(filepath).base;
    return parent.addChild(key, { type: 'file' });
  }

  isDirectory(filepath) {
    if (this.findNode(filepath) === undefined) {
      return false;
    }
    const node = this.findNode(filepath);
    const nodeMeta = node.getMeta();
    return nodeMeta.type === 'dir';
  }

  isFile(filepath) {
    if (this.findNode(filepath) === undefined) {
      return false;
    }
    const node = this.findNode(filepath);
    const nodeMeta = node.getMeta();
    return nodeMeta.type === 'file';
  }
}
