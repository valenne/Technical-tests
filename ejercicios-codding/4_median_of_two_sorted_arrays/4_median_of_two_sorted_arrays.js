var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMedianSortedArrays(nums1, nums2) {
    var nArr = __spreadArray(__spreadArray([], nums1, true), nums2, true);
    var sortedArray = nArr.sort(function (a, b) { return a - b; });
    var n = sortedArray.length;
    var isPar = n % 2 === 0 && true;
    var typeOfDiffFromNumber = sortedArray
        .map(function (value) { return (typeof value === 'number' ? true : false); })
        .filter(function (isNumber) { return isNumber === true; }).length === n && true;
    var median = -1;
    // validations
    if (!typeOfDiffFromNumber) {
        return median;
    }
    if (!Boolean(n)) {
        return median;
    }
    // calculate media
    if (isPar) {
        median = (sortedArray[n / 2 - 1] + sortedArray[n / 2]) / 2;
        return median;
    }
    else if (!isPar) {
        median = sortedArray[(n - 1) / 2];
        return median;
    }
    return median;
}
var median_1 = findMedianSortedArrays([1, 3], [2]); // output = 2
var median_2 = findMedianSortedArrays([1, 2], [3, 4]); // 0utput = 2,5
var median_3 = findMedianSortedArrays([2, 5, 11, 8], [16, 21, 30]); // 0utput = 11
var median_4 = findMedianSortedArrays([3, 5, 10, 8], [79, 36, 255, 24]); // 0utput = 17
console.table({ median_1: median_1, median_2: median_2, median_3: median_3, median_4: median_4 });
