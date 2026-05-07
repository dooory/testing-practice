export const capitalize = (word) => {
  if (typeof word === "number") {
    return word.toString();
  }

  const firstLetter = word
    .split("")
    .find((el, i) => el.toLowerCase() != el.toUpperCase());

  if (!firstLetter) {
    return word;
  }

  return word.replace(firstLetter, firstLetter.toUpperCase());
};

export const reverseString = (string) => {
  if (typeof string === "number") {
    string = string.toString();
  }

  const length = string.length;
  const splitString = string.split("");

  const reversedString = splitString.map((el, i) => {
    el = splitString[length - 1 - i];

    return el;
  });

  return reversedString.join("");
};

export const calculator = () => {
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
