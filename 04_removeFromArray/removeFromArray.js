const removeFromArray = function(arr, ...removalItems) {
    for (item of removalItems) {
        let idx = arr.indexOf(item);
        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = arr.indexOf(item);
        }    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
