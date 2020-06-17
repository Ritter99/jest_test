var cityDatabase = {};

function initializeCityDatabase() {
  cityDatabase["Vienna"] = true;
  cityDatabase["San Juan"] = true;
}

function clearCityDatabase() {
  cityDatabase["Vienna"] = false;
  cityDatabase["San Juan"] = false;
}

function isCity(city) {
  if (cityDatabase[city]) {
    return true;
  } else {
    return false;
  }
}

beforeEach(() => {
  initializeCityDatabase();

  // NOTE: if initializeCityDatabase was async, we would want to return its promise as follows:
  // return initializeCityDatabase()
});

afterEach(() => {
  clearCityDatabase();
});

// NOTE: if the cityDatabase could be used the same way for each test (no need to setup for each one)
//        ...then we could use beforeAll() instead.
//        ...beforeEach() executes before each test, beforeAll() executes once before performing all tests
//        ...same goes for afterEach() and afterAll()

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
