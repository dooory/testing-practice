import { reverseString } from "../myFunctions";

test("Reverse string", () => {
  expect(reverseString("mystring")).toBe("gnirtsym");
  expect(reverseString("yourstring")).toBe("gnirtsruoy");
  expect(reverseString(1234)).toBe("4321");
  expect(reverseString(" yourstring")).toBe("gnirtsruoy ");
});
