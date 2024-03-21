var ROMANS_CONSTANTS = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};
function intToRoman(num) {
    if (num < 1 || num > 3999)
        return '';
    var numbers = Object.keys(ROMANS_CONSTANTS).map(function (romanKeys) { return +romanKeys; });
    var filteredNumber = numbers.filter(function (minus) { return minus <= num; }).sort(function (a, b) { return b - a; });
    var roman = '';
    for (var i = 0; i < filteredNumber.length; i++) {
        var isOne = Math.floor(num / filteredNumber[i]);
        if (isOne === 1) {
            var letter = ROMANS_CONSTANTS[filteredNumber[i]];
            roman += letter;
            num -= filteredNumber[i];
        }
        if (isOne > 1) {
            var letter = ROMANS_CONSTANTS[filteredNumber[i]];
            roman += letter;
            num -= filteredNumber[i];
            i--;
        }
    }
    return roman;
}
var roman_1 = intToRoman(123);
var roman_2 = intToRoman(2031);
var roman_3 = intToRoman(221);
var roman_4 = intToRoman(1302);
console.table({ roman_1: roman_1, roman_2: roman_2, roman_3: roman_3, roman_4: roman_4 });
