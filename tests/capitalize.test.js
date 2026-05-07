import capitalize from "../myFunctions/capitalize";

test("Capitalize first letter of word", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("howdy")).toBe("Howdy");
  expect(capitalize(1234)).toBe("1234");
  expect(capitalize("1234")).toBe("1234");
  expect(capitalize(" howdy")).toBe(" Howdy");
  expect(capitalize(" 1howdy")).toBe(" 1Howdy");
});
