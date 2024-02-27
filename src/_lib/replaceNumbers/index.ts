import type { Numbers } from "../../types";

export const replaceNumbers = (str: string, numbers: Numbers) => {
  if (numbers.length !== 10) {
    throw new Error(`Expected 10 numbers, got ${numbers.length}.`);
  }

  let result = "";

  for (const character of str) {
    const dn = Number(character);
    if (isNaN(dn) || dn < 0 || dn > 9) {
      result += character;
    } else {
      result += numbers[dn];
    }
  }

  return result;
};
