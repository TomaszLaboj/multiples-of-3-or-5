import findMultiples3and5 from "./multiplesof3or5";


test("to find sum of multiples where duplicates are removed", () => {
  expect(findMultiples3and5(10)).toBe(23);
});

