function daysUntilChristmas() {
    const today = new Date();
    const christmasDate = new Date(today.getFullYear(), 11, 25); // December is month 11 in JavaScript

    // Calculate the time difference in milliseconds
    const timeDifference = christmasDate - today;

    // Calculate the number of days left
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Calculate and display the days left until Christmas
const daysLeft = daysUntilChristmas();
console.log("There are " + daysLeft + " days left until Christmas.");