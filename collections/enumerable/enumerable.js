// Добавляем отложенные вычисления

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection.slice();
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection, newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection, newOps);
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
    const newOps = this.operations.slice();
    newOps.push(coll => coll.sort(comparator));
    return new Enumerable(this.collection, newOps);
  }

  toArray() {
    return this.operations.reduce((acc, oper) => oper(acc), this.collection);
  }
}

export default Enumerable;
