function lengthOfLongestSubstring(s) {
    var toArray = s.split('');
    if (toArray.length === 0)
        return 0;
    var results = {
        sum: 0,
        substring: [],
        acum: []
    };
    for (var _i = 0, toArray_1 = toArray; _i < toArray_1.length; _i++) {
        var letter = toArray_1[_i];
        if (!results.substring.includes(letter)) {
            results.sum += 1;
            results.substring.push(letter);
        }
        else if (results.substring.includes(letter)) {
            results.acum.push(results.sum);
            results.substring.push(letter);
            results.sum -= 1;
        }
        else {
            results.sum = 0;
        }
    }
    return Math.max.apply(Math, results.acum);
}
var test_1 = lengthOfLongestSubstring('abcabcbb');
var test_2 = lengthOfLongestSubstring('bbbbb');
var test_3 = lengthOfLongestSubstring('pwwkew');
var test_4 = lengthOfLongestSubstring('');
console.table({
    test_1: test_1,
    test_2: test_2,
    test_3: test_3,
    test_4: test_4
});
