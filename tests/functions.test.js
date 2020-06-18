const functions = require("../js/functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("User should be John Smith", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Smith",
  });
});

test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1); // Needed for promises and async code
  return functions.fetchUser().then((res) => {
    expect(res.name).toEqual("Leanne Graham");
  });
});
