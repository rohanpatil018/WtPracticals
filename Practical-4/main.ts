// main.ts
import { add, subtract, multiply, divide } from "./mathop.js";

const num1 = 20;
const num2 = 5;

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("----------------------");

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));
