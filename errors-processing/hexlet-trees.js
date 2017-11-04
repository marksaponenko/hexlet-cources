class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    return this.children.size !== 0;
  }

  hasChild(key) {
    return [...this.children.keys()].includes(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if (keys.length === 0) {
      return undefined;
    }

    const iter = (current, counter) => {
      const key = keys[counter];
      if (counter === keys.length) {
        return current;
      }
      if (!current.hasChild(key)) {
        return undefined;
      }

      return iter(current.getChild(key), counter + 1);
    };
    return iter(this, 0);
  }

  getChildren() {
    return [...this.children.values()];
  }
}

export default Tree;
