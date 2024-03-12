var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
9. Palindromo number

*/
function numberToArray(x) {
    if (x === 0)
        return [0];
    var numbers = [];
    var tempNumber = x;
    while (tempNumber > 0) {
        var digit = tempNumber % 10;
        numbers.unshift(digit);
        tempNumber = Math.floor(tempNumber / 10);
    }
    return numbers;
}
function convertArrayToNumber(arr) {
    var numb = 0;
    // Si el array contiene solo el valor 0, retornar 0
    if (arr.length === 0)
        return 0;
    if (arr.length === 1 && arr[0] === 0) {
        return 0;
    }
    numb = arr.reduce(function (a, b) { return a * 10 + b; });
    // Retornar el número
    return numb;
}
function isPalindrome(x) {
    var arrayNumber = numberToArray(x);
    var copyArray = __spreadArray([], arrayNumber, true);
    var reversedArray = copyArray.reverse();
    var reverseNumber = convertArrayToNumber(reversedArray);
    if (x !== reverseNumber)
        return false;
    return true;
}
var numberPalin_1 = isPalindrome(12);
var numberPalin_2 = isPalindrome(10);
var numberPalin_3 = isPalindrome(0);
var numberPalin_4 = isPalindrome(101);
var numberPalin_5 = isPalindrome(111);
console.table({ numberPalin_1: numberPalin_1, numberPalin_2: numberPalin_2, numberPalin_3: numberPalin_3, numberPalin_4: numberPalin_4, numberPalin_5: numberPalin_5 });
