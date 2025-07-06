const repeatString = function (string, num) {
    if (num < 0)
        return "ERROR";
    let total = "";
    for (let i = 0; i < num; i++)
        total += string;
    return total;
};

// Do not edit below this line
module.exports = repeatString;
