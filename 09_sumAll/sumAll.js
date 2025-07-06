const sumAll = function (a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        let total = 0;
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            total += i;
        }
        return total;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
