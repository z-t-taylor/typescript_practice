import { multiply } from "../ts_katas_1";

describe("multiply function", () => {
  test("multiplies 1 * 2 to equal 3", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test("multiplies 17 * 60 to equal 1020", () => {
    expect(multiply(17, 60)).toBe(1020);
  });
});
