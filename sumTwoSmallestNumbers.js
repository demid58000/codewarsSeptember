function sumTwoSmallestNumbers(numbers) {
    let res = (a, b) => a - b
    numbers.sort(res)
    return numbers[0] + numbers[1]
}