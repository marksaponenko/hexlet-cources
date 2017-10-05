// Меняем реализацию методов, чтобы работать в иммутабильном стиле

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    const sorted = this.collection.slice().sort(comparator);
    return new Enumerable(sorted);
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
