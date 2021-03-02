export const randElem = (arr: string[]) =>
  arr ? arr[Math.floor(Math.random() * arr.length)] : "";
