const Intern = require("../lib/Intern");

test("Can set bootcamp via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.bootcamp).toBe(testValue);
});

test("getTitle() should return \"coffee runner/Intern\"", () => {
  const testValue = "coffee runner/Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getTitle()).toBe(testValue);
});

test("Can get bootcamp via getBootcamp()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getBootcamp()).toBe(testValue);
});