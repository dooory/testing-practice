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

const characterCodeRanges = [
  [123, 97], // Lowercase
  [91, 65], // Uppercase
  [58, 48], // Digits
];

const wrapNumber = (value, max, min) => {
  const range = max - min;

  const shifted = value - min;

  const wrapped = ((shifted % range) + range) % range;

  return wrapped + min;
};

const getCodeRanges = (code) => {
  return (
    characterCodeRanges.find((range) => code >= range[1] && code < range[0]) ||
    []
  );
};

const encryptCharacter = (ch, key) => {
  const chCode = ch.charCodeAt(0);

  const [maxCode, minCode] = getCodeRanges(chCode);

  if (!maxCode || !minCode) {
    return ch;
  }

  const adjustedChCode = wrapNumber(chCode + key, maxCode, minCode);
  const encryptedCh = String.fromCharCode(adjustedChCode);

  return encryptedCh;
};

export const caesarCipher = (string, key) => {
  if (typeof string === "number") {
    string = string.toString();
  }

  const splitString = string.split("");

  const encryptedString = splitString
    .map((ch) => encryptCharacter(ch, key))
    .join("");

  return encryptedString;
};
