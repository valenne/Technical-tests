var palindromo = function (left, rigth, text) {
    while (left >= 0 && rigth < text.length && text[left] === text[rigth]) {
        left--;
        rigth++;
    }
    return text.slice(left + 1, rigth);
};
function longestPalindrome(s) {
    var longest = '';
    var typeVariable = typeof s;
    // string is empty
    if (s.length === 0 || typeVariable !== 'string')
        return false;
    for (var i = 0; i < s.length; i++) {
        var evenPal = palindromo(i, i + 1, s);
        var oddPal = palindromo(i, i, s);
        var longestPal = evenPal.length > oddPal.length ? evenPal : oddPal;
        if (longestPal.length > longest.length) {
            longest = longestPal;
        }
    }
    return longest;
}
var sEx1 = 'aqllc'; // [0,1,2,3,4,5,6,7]
var sEx2 = 'babad';
var sEx3 = 'cbbd';
var sEx4 = 'rapar';
var sEx5 = 'reconocer';
var sEx6 = 'saweraparertrrq';
console.log(longestPalindrome(sEx1));
console.log(longestPalindrome(sEx2));
console.log(longestPalindrome(sEx3));
console.log(longestPalindrome(sEx4));
console.log(longestPalindrome(sEx5));
console.log(longestPalindrome(sEx6));
