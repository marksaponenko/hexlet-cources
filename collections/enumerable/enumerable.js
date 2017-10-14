/*
Реализуйте метод where, основываясь на следующем интерфейсе:
Функция может принимать любое количество параметров, каждый из которых
может быть либо функцией, либо объектом. Для функций должна осуществляться
простая фильтрация, для объектов нужно проверять соответствие элемента
коллекции значениям по тем же ключам, что и в переданном объекте.
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  where(...args) {
    return this.build(args.map((value) => {
      if (typeof value === 'function') {
        return coll => coll.filter(value);
      }

      return coll => coll.filter(element => Object.keys(value).every(i => element[i] === value[i]));
    }));
  }

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
