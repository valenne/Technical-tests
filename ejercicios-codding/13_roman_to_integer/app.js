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
var LetterToCare = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
var getObjectKey = function (obj, value) {
    return Object.keys(obj).find(function (key) { return obj[key] === value; });
};
function romanToInt(s) {
    // valid's input
    var isValidInput = typeof s === 'string' && true;
    if (!isValidInput)
        return 0;
    var splitRomanToArray = s.toUpperCase().split('');
    var number = 0;
    for (var i = 0; i < s.length; i++) {
        var romanStringToSearch = '';
        if (LetterToCare.indexOf(splitRomanToArray[i] + splitRomanToArray[i + 1]) >= 0) {
            var temporalString = splitRomanToArray[i] + splitRomanToArray[i + 1];
            romanStringToSearch = temporalString;
            i++;
        }
        number +=
            romanStringToSearch !== ''
                ? +getObjectKey(ROMANS_CONSTANTS, romanStringToSearch)
                : +getObjectKey(ROMANS_CONSTANTS, splitRomanToArray[i]);
    }
    return number;
}
var numberFromRomanLetter_1 = romanToInt('MCMXCIV');
var numberFromRomanLetter_2 = romanToInt('LVIII');
var numberFromRomanLetter_3 = romanToInt('III');
var numberFromRomanLetter_4 = romanToInt('IV');
var numberFromRomanLetter_5 = romanToInt('XC');
console.log({
    numberFromRomanLetter_1: numberFromRomanLetter_1,
    numberFromRomanLetter_2: numberFromRomanLetter_2,
    numberFromRomanLetter_3: numberFromRomanLetter_3,
    numberFromRomanLetter_4: numberFromRomanLetter_4,
    numberFromRomanLetter_5: numberFromRomanLetter_5
});
