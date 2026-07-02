export function greet(name) {
  const greeting = "Hello, " + name + "!";
  return greeting;
}
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
console.log(greet("Faiaz"));
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
