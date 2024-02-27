import { describe, it, expect } from "vitest";
import { replaceNumbers } from "./index";
import type { Numbers } from "../../types";

const first10Letters: Numbers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];

describe("replaceNumbers", () => {
  it("returns 'aga' for 171", () => {
    const result = replaceNumbers("171", first10Letters);
    expect(result).toEqual("bhb");
  });

  it("returns 'cjd' for 293", () => {
    const result = replaceNumbers("293", first10Letters);
    expect(result).toEqual("cjd");
  });
});
