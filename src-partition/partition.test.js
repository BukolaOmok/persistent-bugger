import { partition } from "./partition.js";

test("split up odd an even numbers", () => {
    const isOdd = (n) => n % 2 !== 0;
    expect(partition([1, 7, 2, 40, 5, 800, 40], isOdd)).toEqual([[1, 7, 5], [2, 40, 800, 40]]);
  })

  test("split up short and long names", () => {
    const isShortName = (str) => str.length <= 4;
    expect(partition(['yunas', 'sena', 'maryam', 'tavija', 'liv', 'seb', 'bukola', 'dafe'], isShortName)).toEqual([['sena', 'liv', 'seb', 'dafe'], ['yunas', 'maryam', 'tavija', 'bukola']]);
  })