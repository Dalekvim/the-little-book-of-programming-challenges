export const censor = (word: string, allowedCharacters: string[]) => {
  return word
    .split("")
    .reduce(
      (acc, cur) => (allowedCharacters.includes(cur) ? acc + cur : acc + "*"),
      ""
    );
};
