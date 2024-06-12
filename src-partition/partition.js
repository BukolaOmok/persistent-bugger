function partition (arr, callback) {
    const passedArray = []
    const failedArray = []

    for (let element of arr) {
        if (callback(element)) {
            passedArray.push(element)
        } else {
            failedArray.push(element)
        }
    }
    const result = [passedArray, failedArray]
    return result
}

export {partition}

