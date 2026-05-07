export default (arr) => {
  arr = structuredClone(arr);

  arr.sort();

  const length = arr.length;
  const average = arr.reduce((prev, curr) => prev + curr) / length;
  const min = arr[0];
  const max = arr[length - 1];

  return {
    average,
    min,
    max,
    length,
  };
};
