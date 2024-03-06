function lengthOfLongestSubstring(s) {
    if (s.length <= 0 || s.length >= 5 * Math.pow(10, 4))
        return 0;
    if (s.length === 1)
        return s.length;
    var longest = 0;
    var tempSet = new Set();
    var left = 0;
    var rigth = 0;
    while (rigth < s.length) {
        var letter = s[rigth];
        if (!tempSet.has(letter)) {
            tempSet.add(letter);
            longest = Math.max(longest, tempSet.size);
            rigth++;
        }
        else {
            tempSet.delete(s[left]);
            left++;
        }
    }
    return longest;
}
var test_1 = lengthOfLongestSubstring('abcabcbb');
var test_2 = lengthOfLongestSubstring('bbbbb');
var test_3 = lengthOfLongestSubstring('pwwkew');
var test_4 = lengthOfLongestSubstring('');
var test_5 = lengthOfLongestSubstring('enjoyalgorithms');
console.table({
    test_1: test_1,
    test_2: test_2,
    test_3: test_3,
    test_4: test_4,
    test_5: test_5
});
