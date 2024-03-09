const sumAll = function(min, max) {
    if(isNaN(min) || isNaN(max)) return 'ERROR';
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if(min < 0 || max < 0) return 'ERROR'
    return (Math.abs(min-max) + 1)*(min + max)/2;
};

// Do not edit below this line
module.exports = sumAll;
