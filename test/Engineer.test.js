const Engineer = require("../lib/Engineer");

test("Can set repo account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.repo).toBe(testValue);
});

test("getRepo() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRepo()).toBe(testValue);
});

test("Can get repo username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getRepo()).toBe(testValue);
});