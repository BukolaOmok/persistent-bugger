import { persistence } from "./persistence";

test("multiply number till reaches single digit", () => {
  expect(persistence(39)).toEqual(3);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(999)).toEqual(4);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(4)).toEqual(0);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(1000)).toEqual(1);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(25)).toEqual(2);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(651)).toEqual(2);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(3456)).toEqual(3);
});

test("multiply number till reaches single digit", () => {
  expect(persistence(77)).toEqual(4);
});