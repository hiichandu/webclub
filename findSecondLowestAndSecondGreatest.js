function findSecondLowestAndSecondGreatest(numbers) {
    if (numbers.length < 2) {
        return "Array should contain at least two numbers.";
    }

    // Sort the array in ascending order
    numbers.sort(function (a, b) {
        return a - b;
    });

    // Remove duplicate numbers
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        return "Array should contain at least two distinct numbers.";
    }

    const secondLowest = uniqueNumbers[1];
    const secondGreatest = uniqueNumbers[uniqueNumbers.length - 2];

    return ${secondLowest},${secondGreatest};
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = findSecondLowestAndSecondGreatest(numbers);
console.log(result); // Output: '2,4'