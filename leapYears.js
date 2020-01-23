function leapYears(year) {
    if (typeof year !== 'number') {
        return "Not a number";
    }
    if ((year % 400 !== 0) && (year % 100 !== 0)) {
        return "It is not a leap year";
    }
    if ((year % 400 === 0) && (year % 100 === 0)) {
        return "It is a leap year";
    }
    if (year % 4 === 0) {
        return "It is a leap year";
    }
}

console.log(leapYears(1984));