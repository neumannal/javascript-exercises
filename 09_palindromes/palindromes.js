const palindromes = function (str) {
    forward = str
    .replaceAll(".", "")
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .toUpperCase();
    reverse = forward
        .split("")
        .reverse()
        .join("");
    console.log(forward);
    console.log(reverse);
    return forward === reverse
};

// Do not edit below this line
module.exports = palindromes;
