import { describe, expect, it } from "vitest";
import { format } from "../../format";
import { ar } from "./index";

describe("ar locale", () => {
  describe("formats ordinal numbers with arabic numerals", () => {
    it("does not return western digits for format do", function () {
      const date = new Date(2024, 2, 27);
      const result = format(date, "d", { locale: ar });

      expect(result).not.to.match(/.*[0-9].*/);
    });

    it("returns arabic numerals only for a full date string", function () {
      const date = new Date(2024, 2, 27);
      const result = format(date, "yyyy-MM-dd HH:mm:ss", { locale: ar });

      expect(result).not.to.match(/.*[0-9].*/);
    });
  });
});
