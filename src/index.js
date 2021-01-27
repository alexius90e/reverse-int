module.exports = function reverse(n) {
    n > 0 ? n = n : n = 0-n;
    return String(n).split('').reverse().join('');
};
