function isJanuary1stSunday(year) {
    const date = new Date(year, 0, 1); // January is month 0 in JavaScript

    // Check if the day of the week is Sunday (0)
    return date.getDay() === 0;
}

// Check for each year between 2014 and 2050
for (let year = 2014; year <= 2050; year++) {
    if (isJanuary1stSunday(year)) {
        console.log("January 1st, " + year + " is a Sunday.");
    }
}