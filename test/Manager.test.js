const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set stapler thefts via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getTitle() should return \"Manager/Stapler Thief\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("How man staplers did this dude take via getStaplers()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getStaplers()).toBe(testValue);
});