import { calculateAverage } from "./average.js";

test("averages 1 and 3 to equal 2", () => {
    expect(calculateAverage([1, 3])).toEqual(2);
  })

  test("averages 1 and 5 to equal 3", () => {
    expect(calculateAverage([1, 5])).toEqual(3);
  })

  test("averages 0, 5 and 10 to equal 5", () => {
    expect(calculateAverage([0, 5, 10])).toEqual(5);
  })