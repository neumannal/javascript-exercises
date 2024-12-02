const findTheOldest = function(people) {
    people.sort( (a, b) => {
        const currentYear = new Date().getFullYear();
        let ageA = currentYear - a.yearOfBirth;
        let ageB = currentYear - b.yearOfBirth;
        if (a.yearOfDeath) {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        if (b.yearOfDeath) {
            ageB = b.yearOfDeath - a.yearOfBirth;
        }
        return ageA - ageB;
    } )
    return people.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
