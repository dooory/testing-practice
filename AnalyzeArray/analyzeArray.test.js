import analyzeArray from "./analyzeArray";

const validateArray = (array, average, min, max, length) => {
  const arrayCopy = [...array];
  const analyzedArray = analyzeArray(array);

  expect(arrayCopy).toEqual(array);

  expect(analyzedArray).toHaveProperty("average");
  expect(analyzedArray).toHaveProperty("min");
  expect(analyzedArray).toHaveProperty("max");
  expect(analyzedArray).toHaveProperty("length");

  expect(analyzedArray.length).toBe(length);
  expect(analyzedArray.average).toBe(average);
  expect(analyzedArray.min).toBe(min);
  expect(analyzedArray.max).toBe(max);
};

test("Get the average, min, max, and length of an arrays values", () => {
  validateArray([1, 8, 3, 4, 2, 6], 4, 1, 8, 6);
});
