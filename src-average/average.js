function calculateAverage(numbers){
    let sum = 0
    for(let number of numbers){
      sum += number
    }
    const average = sum / numbers.length
    return average
  }

  export { calculateAverage };