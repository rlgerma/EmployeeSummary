const Engineer = require("../lib/Engineer");

test("Can set repo account via constructor", () => {
  const testValue = "repo";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.repo).toBe(testValue);
});

test("getRepo() should return \"repo\"", () => {
  const testValue = "repo";
  const e = new Engineer("Foo", 1, "test@test.com", "repo");
  expect(e.getRepo()).toBe(testValue);
});

test("Can get repo username via getRepo()", () => {
  const testValue = "repo";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getRepo()).toBe(testValue);
});