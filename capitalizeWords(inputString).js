function capitalizeWords(inputString) {
    // Split the string into words
    const words = inputString.split(' ');

    // Create an array to store the capitalized words
    const capitalizedWords = [];

    // Iterate through the words and capitalize the first letter of each word
    for (const word of words) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }

    // Join the capitalized words back into a string
    const resultString = capitalizedWords.join(' ');

    return resultString;
}

// Example usage:
const inputString = 'the quick brown fox';
const capitalizedResult = capitalizeWords(inputString);
console.log(capitalizedResult); // Output: 'The Quick Brown Fox'