var nums = [1, 2, 2, 2, 5];
var target = 6;
function twoSum(nums, target) {
    var dictionary = {};
    var diff = 0;
    for (var i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        // let findElementByFind = Object.keys(dictionary).find((num) => num === diff.toString()) && true
        var findElementByIndexOf = Object.keys(dictionary).indexOf(diff.toString()) >= 0;
        if (findElementByIndexOf) {
            return [dictionary[diff], i];
        }
        else {
            dictionary[nums[i]] = i;
        }
        if (findElementByIndexOf) {
            return [dictionary[diff], i];
        }
        else {
            dictionary[nums[i]] = i;
        }
    }
    return false;
}
var numberResponse = twoSum(nums, target);
console.log(numberResponse);
