import { assert } from "chai";
import { circleOfNumbers } from "./circleofnumbers";

describe("basic tests", function() {
  it("circleOfNumbers(10, 2)", () => assert.strictEqual(circleOfNumbers(10, 2), 7));
  it("circleOfNumbers(10, 7)", () => assert.strictEqual(circleOfNumbers(10, 7), 2));
  it("circleOfNumbers(4, 1)", () => assert.strictEqual(circleOfNumbers(4, 1), 3));
  it("circleOfNumbers(6, 3)", () => assert.strictEqual(circleOfNumbers(6, 3), 0));
  it("circleOfNumbers(20, 0)", () => assert.strictEqual(circleOfNumbers(20, 0), 10));
});

describe("random tests", function() {
  const sol = (n: number, firstNumber: number) => (n / 2 + firstNumber) % n;
  for (let i = 0; i < 100; i++) {
    const n = (Math.floor(Math.random() * 499) + 2) * 2;
    const f = Math.floor(Math.random() * n);
    it(`circleOfNumbers(${n}, ${f})`, () => assert.strictEqual(circleOfNumbers(n, f), sol(n, f)));
  }
});