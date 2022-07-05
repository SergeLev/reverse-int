module.exports = function reverse (n) {
    if (n < 0) { n = n * Math.sign(n)}
    return +(n.toString().split('').reverse().join(''));  
}
