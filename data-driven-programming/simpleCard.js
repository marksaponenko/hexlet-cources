const make = (name, points) =>
  ({
    name,
    damage: () => points,
  });

export default make;
