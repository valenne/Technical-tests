function convert(s, numRows) {
    if (numRows === 1 || s.length < numRows)
        return s;
    var arr = new Array(numRows).fill('');
    var direction = false;
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        var curr = s[i];
        arr[count] += curr;
        if (count === 0 || count >= numRows - 1) {
            direction = !direction;
        }
        direction ? count++ : count--;
    }
    return arr.join('');
}
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('PAYPALISHIRING', 5));
console.log(convert('PAYPALISHIRING', 1));
console.log(convert('PAYPALISHIRING', 2));
