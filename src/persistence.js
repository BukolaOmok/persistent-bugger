function persistence(num) {
  let count = 0;
  let newNum = num;

  if (num < 10) {
    return 0;
  }

  while (newNum > 9) {
    let arrayOfDigits = Array.from(String(newNum), Number);
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
