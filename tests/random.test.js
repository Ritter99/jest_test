test("object falsy", () => {
  const data = {
    one: 1,
  };
  expect(data).toEqual({
    one: 1,
  });
});
test("object contain", () => {
  const data = {
    one: 1,
    two: 2,
    three: 3,
  };
  expect(data).toMatchObject({
    one: 1,
    two: 2,
  });
});
