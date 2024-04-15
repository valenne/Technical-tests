function longestCommonPrefix(strs) {
    if (!strs.length)
        return '';
    var sortedArray = strs.sort(function (a, b) { return b.length - a.length; });
    var prefix = strs[0];
    for (var i = 0; i < strs.length; i++) {
        while (sortedArray[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }
    return prefix;
}
var longest_1 = longestCommonPrefix(['flower', 'flow', 'flight']);
console.log(longest_1);
