function persistence(num) {
  let count = 0;
  let newNum = num;

  function splitNumbersToArray(newNum) {
    let splitDigits = Array.from(String(newNum), Number);
    return splitDigits;
  }

  if (num < 10) {
    return 0;
  }

  while (newNum > 9) {
    let arrayOfDigits = splitNumbersToArray(newNum);
    let multiplyDigits = 1;
    for (let i of arrayOfDigits) {
      multiplyDigits *= i;
    }
    newNum = multiplyDigits;
    count++;
  }
  return count;
}

export { persistence };
