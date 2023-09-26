function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it's divisible by 100 but not divisible by 400, it's not a leap year
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        // Otherwise, it is a leap year
        return true;
    }
    // If it's not divisible by 4, it's not a leap year
    return false;
}

// Input year
const yearToCheck = 2023; // Replace with the year you want to check

// Check if it's a leap year and display the result
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
} else {
    console.log(yearToCheck + " is not a leap year.");
}