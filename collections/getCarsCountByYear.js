/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает
на вход список машин (в виде обычного js массива с объектами),
а возвращает объект в котором свойство это год выпуска, а значение
это количество машин для соответствующего года.

Порядок свойств в результирующем объекте не важен.

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

console.log(getCarsCountByYear(cars));
//  {
//    2010: 1,
//    2012: 1,
//    2013: 1,
//    2014: 2,
//  };
*/


export default (cars) => {
  const iter = (coll, acc) => {
    if (coll.length === 0) {
      return acc;
    }
    const [{ year }, ...rest] = coll;
    const newValue = acc[year] ? acc[year] + 1 : 1;
    return iter(rest, { ...acc, [year]: newValue });
  };
  return iter(cars, {});
};
