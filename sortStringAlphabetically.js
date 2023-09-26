function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters
    const charArray = inputString.split('');

    // Sort the array alphabetically
    const sortedArray = charArray.sort();

    // Join the sorted array back into a string
    const sortedString = sortedArray.join('');

    return sortedString;
}

// Example usage:
const inputString = 'webmaster';
const sortedResult = sortStringAlphabetically(inputString);
console.log(sortedResult); // Output: 'abeemrstw'