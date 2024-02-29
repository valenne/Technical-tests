function numberIntoLimit(n) {
    var limitless = n >= Math.pow(2, 31) - 1 || (n <= Math.pow((-2), 31) && true);
    if (limitless)
        return 0;
    return n;
}
function reverse(x) {
    var xToString = x.toString();
    if (xToString.includes('-')) {
        var middleLane = xToString.slice(0, 1);
        var restNumber = xToString.slice(1);
        var reversed_1 = numberIntoLimit(Number(middleLane + restNumber.split('').reverse().join('')));
        return reversed_1;
    }
    var reversed = numberIntoLimit(Number(x.toString().split('').reverse().join('')));
    return reversed;
}
var numberOne = reverse(123); // 321
var numberTwo = reverse(-123); // -321
var numberthree = reverse(120); // 21
console.table({ numberOne: numberOne, numberTwo: numberTwo, numberthree: numberthree });
