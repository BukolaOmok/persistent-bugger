function countTopThree (inputText, numberOfWinners) {
    return countOccurences(inputText)
}    



function countOccurences(inputString) {
    const results = {}
    for (let i of inputString) {
      let letter = i.toLowerCase(); //case insensitive
      if (alphaChecker(letter)) { //getting rid of non-letters
        continue;
      }
      if (letter in results) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
    return results;
  }
  
  function alphaChecker(letter) {
    if (letter >= 'a' && letter <= 'z') {
      return false;
    } else {
      return true;
    }
  }

  export {countTopThree, countOccurences, alphaChecker}
  