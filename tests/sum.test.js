const sum = require("../js/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two", () => {
  const value = sum(2, 2);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// For floating point numbers, use toBeCloseTo() instead of toBe() or toEqual()
// We don't want a test to depend on tiny rounding errors
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3)  This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works!
});
