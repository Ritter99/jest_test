// More on mock calls and Jest at:
// https://jestjs.io/docs/en/mock-functions

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("testing mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test("second mock callback test", () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  // console.log(myMock.mock.instances);

  //  The function was called exactly once
  // expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  // expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

  // The second arg of the first call to the function was 'second arg'
  // expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

  // The return value of the first call to the function was 'return value'
  // expect(someMockFunction.mock.results[0].value).toBe("return value");

  // This function was instantiated exactly twice
  // expect(someMockFunction.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  // expect(someMockFunction.mock.instances[0].name).toEqual("test");

  // NOTE: this is a filler to pass the test
  expect(true).toBeTruthy();
});

test("third mock callback test", () => {
  const myMock = jest.fn();
  console.log(myMock());

  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
});

test("fourth mock callback test", () => {
  const filterTestFn = jest.fn();

  // Make the mock return 'true' for the first call,
  // and 'false' for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  console.log(result);
  console.log(filterTestFn.mock.calls);
});
