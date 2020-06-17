// When you describe a block, the before and after blocks only apply to the tests withing that describe block

var cityDatabase = {};

function initializeCityDatabase() {
  cityDatabase["Vienna"] = { isCity: true, food: "Wiener Schnitzel" };
  cityDatabase["San Juan"] = { isCity: true, food: "Mofongo" };
}

function clearCityDatabase() {
  cityDatabase["Vienna"] = { isCity: false, food: "" };
  cityDatabase["San Juan"] = { isCity: false, food: "" };
}

function isCity(city) {
  if (cityDatabase[city]["isCity"]) {
    return true;
  } else {
    return false;
  }
}

function isValidCityFoodPair(city, food) {
  if (cityDatabase[city]["food"] == food) {
    return true;
  } else {
    return false;
  }
}

beforeEach(() => {
  initializeCityDatabase();
});

// Due to the 'only' flag on the below test, it will be the only one that runs in this test
// Because of this, you will see in the log that 3 tests have been skipped
test.only("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    initializeCityDatabase();
  });

  test("Vienna <# sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <# plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});

// The following code will execute the comments in exact order

/*
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});
*/

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

/*
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});
*/

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
