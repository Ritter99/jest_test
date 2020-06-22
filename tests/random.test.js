test('object falsy', () => {
    const data = {
      one: 1
    };
    expect(data).toEqual({
      one: 1,
      two: 2
    });
  })
  test('object contain', () => {
    const data = {
      one: 1,
      two: 2,
      three: 4,
    };
    expect(data).toContain({
      one: 1,
      two: 2
    });
  })