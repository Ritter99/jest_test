// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

// Adding this test just so that Jest runs the file correctly
test("filler test for async, no real purpose", () => {
  expect(true).toBeTruthy();
});

// Everything below this line in this file is correct in terms of Jest.
// It is commented out because it has errors with Node JS which I am not familiar with

/*
const fetchData = require("node-fetch");

test("the data is peanut butter", () => {
  function callback() {
    try {
      expect(data).toBe("peanut butter");
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
*/

/*
test("the data is peanut butter", () => {
  // Very important that this is a return statement!!!
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
*/

// If you expect a promise to be rejected:
/*
test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("error"));
});
*/

// Resolves and Rejects (sounds like the name of a bad band)
/*
test("the data is peanut butter", () => {
  // Must be a return
  return expect(fetchData()).resolves.toBe("peanut butter");
});
*/

/*
test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});
*/

// Async/Await
/*
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch data fails with an error", async () => {
  await expect(fetchData()).rejects.toThrow("error");
});
*/
