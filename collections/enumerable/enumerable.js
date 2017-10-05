// Создает коллекцию и методы ее обработки

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, order = 'asc') {
    const compare = (a, b) => {
      const compareResult = order === 'asc' ? 1 : -1;
      if (fn(a) > fn(b)) {
        return compareResult;
      }
      if (fn(a) < fn(b)) {
        return -compareResult;
      }
      return 0;
    };

    this.collection = this.collection.sort(compare);
    return this;
  }


  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
