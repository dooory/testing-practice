export default reverseString = (string) => {
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
