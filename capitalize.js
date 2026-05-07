const capitalize = (word) => {
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

export default capitalize;
