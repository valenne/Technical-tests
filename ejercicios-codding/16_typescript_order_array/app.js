var sortDescending = function (a, b) {
    return a > b ? -1 : 1;
};
var sortAscending = function (a, b) {
    return a > b ? 1 : -1;
};
function buildArray(items, sortOrder) {
    var randomNumbers = [];
    for (var i = 0; i < items; i++) {
        var numb = Math.floor(Math.random() * 100 + 1);
        randomNumbers.push(numb);
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
var myArray1 = buildArray(12, 'ascending');
var myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
