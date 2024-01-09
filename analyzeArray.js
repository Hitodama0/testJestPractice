function ObjectCreate(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
}

function analyzeArray(numbers) {
    let sum = 0;
    let length = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    for (const num of numbers) {
        sum += num;
    }

    let average = sum / numbers.length;

    return new ObjectCreate(average, min, max, length);
}

module.exports = analyzeArray;