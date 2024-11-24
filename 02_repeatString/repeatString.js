const repeatString = function(string, repeats) {
    if (repeats >= 0) {
        reply = ""
        for (let i=0; i<repeats; i++) {
            reply += string;
        }
        return reply;    
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
