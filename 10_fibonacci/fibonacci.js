const fibonacci = function(number) {
    sequence = [1, 1]
    if (number < 0) {
        return "OOPS";
    }
    else if (number == 0) {
        return 0;
    } else if (number <= 2) {
        return 1;
    } else {
        for (let i=2; i<number; i++) {
            sequence.push(sequence[i-2] + sequence[i-1]);
        }
        return sequence.pop();
    }
};

// Do not edit below this line
module.exports = fibonacci;
