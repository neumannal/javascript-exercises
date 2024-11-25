// Implement a function that takes 2 positive integers and returns the sum of 
// every integer between (and including) them:
const sumAll = function(int1, int2) {
    if (
        (typeof (int1+int2) !== "number") || 
        (int1 !== Math.floor(int1)) ||
        (int2 !== Math.floor(int2)) ||
        (int1 < 0) ||
        (int2 < 0)
    ) {
        return "ERROR";
    }

    let returnValue = 0;

    let smallerInt = int1;
    let largerInt = int2;
    if (int1 > int2) {
        smallerInt = int2;
        largerInt = int1;
    }

    for (let i = smallerInt; i <= largerInt; i++) {
        returnValue += i;
    }

    return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
