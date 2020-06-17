// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

test('the data is in peanut butter', () => {
  function callback() {
    try {
      expect(data).toBe('peanut butter')
    } catch (error) {
      done(error)
    }
  }

  fetchData(callback)
})