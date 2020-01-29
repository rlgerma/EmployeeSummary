const Engineer = require("../lib/Engineer");

test("Can set repo account via constructor", () => {
  const testValue = "repo";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.repo).toBe(testValue);
});

test("getgitHub() should return \"gitHub\"", () => {
  const testValue = "gitHub";
  const e = new Engineer("Foo", 1, "test@test.com", "gitHub");
  expect(e.getgitHub()).toBe(testValue);
});

test("Can get gitHub username via getgitHub()", () => {
  const testValue = "gitHub";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getgitHub()).toBe(testValue);
});