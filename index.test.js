import { add, greet } from "./index.js";

test("add adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("add works with negative numbers", () => {
  expect(add(-1, -1)).toBe(-2);
});

test("greet returns a hello message with the name", () => {
  expect(greet("Faiaz")).toBe("Hello, Faiaz!");
});

