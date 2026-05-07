import calculator from "./calculator";

const cal = calculator();

test("Calculator adds, subtracts, divides, and multiplies two numbers", () => {
  expect(cal.add(1, 2)).toBeCloseTo(3);
  expect(cal.add(4, 4)).toBeCloseTo(8);

  expect(cal.sub(10, 5)).toBeCloseTo(5);
  expect(cal.sub(6, 2)).toBeCloseTo(4);

  expect(cal.div(4, 2)).toBeCloseTo(2);
  expect(cal.div(10, 2)).toBeCloseTo(5);

  expect(cal.mul(10, 10)).toBeCloseTo(100);
  expect(cal.mul(5, 2)).toBeCloseTo(10);
  expect(cal.mul(5, "2")).toBeCloseTo(10);
  expect(cal.mul("5", "2")).toBeCloseTo(10);
});
