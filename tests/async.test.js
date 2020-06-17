// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

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

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
