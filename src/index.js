module.exports = function reverse (n) {
    n = String(n);
    const str = n.split('').reverse().join('');
    return parseInt(str);
}
