function addTwoNumbers(_a) {
    var l1 = _a.l1, l2 = _a.l2;
    if (!l1 || !l2) {
        return "An array is undefined";
    }
    if (l1.length === 0 || l2.length === 0) {
        return "An array is empty";
    }
    var containTwoDigit = function (list) {
        if (list.length === list.join('').length)
            return false;
        return true;
    };
    if (containTwoDigit(l1) || containTwoDigit(l2)) {
        return "one number contain double digit";
    }
    var reversedSum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
    var finalResult = reversedSum
        .toString()
        .split('')
        .reverse()
        .map(function (num) {
        return Number(num);
    });
    return finalResult;
}
var result_1 = addTwoNumbers({ l1: [2, 4, 3], l2: [5, 6, 4] });
var result_2 = addTwoNumbers({ l1: [0], l2: [0] });
var result_3 = addTwoNumbers({ l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] });
var result_emptyArray = addTwoNumbers({ l1: [], l2: [9, 9, 9, 9] });
var result_doubleDigit = addTwoNumbers({ l1: [22, 1, 3], l2: [0, 1, 2] });
console.log({
    result_1: result_1,
    result_2: result_2,
    result_3: result_3,
    result_emptyArray: result_emptyArray,
    result_doubleDigit: result_doubleDigit
});
