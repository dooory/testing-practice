import caesarCipher from "./caesarCipher";

test("Shift a string by shift factor", () => {
  //   expect(caesarCipher("abc", 3)).toBe("def");
  //   expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("xyz", -3)).toBe("uvw");
  expect(caesarCipher("abc", -3)).toBe("xyz");

  expect(caesarCipher("AbC", 3)).toBe("DeF");
  expect(caesarCipher("AbC", -3)).toBe("XyZ");

  expect(caesarCipher("HelloWorld", 3)).toBe("KhoorZruog");
  expect(caesarCipher("Howdy, Hey!", 3)).toBe("Krzgb, Khb!");

  expect(caesarCipher("My favorite number is 7", 3)).toBe(
    "Pb idyrulwh qxpehu lv 0",
  );
});
