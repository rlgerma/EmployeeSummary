const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set stapler thefts via constructor argument", () => {
  const testValue = >0;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.staplers).toBe(testValue);
});

test("getTitle() should return \"Manager/Stapler Thief\"", () => {
  const testValue = "Manager/Stapler Thief";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getTitle()).toBe(testValue);
});

test("How man staplers did this dude take via getStaplers()", () => {
  const testValue = >0;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getStaplers()).toBe(testValue);
});