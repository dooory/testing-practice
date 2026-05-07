export default calculator = () => {
  const add = (x, y) => {
    return x + y;
  };

  const sub = (x, y) => {
    return x - y;
  };

  const div = (x, y) => {
    return x / y;
  };

  const mul = (x, y) => {
    return x * y;
  };

  return {
    add,
    sub,
    div,
    mul,
  };
};
