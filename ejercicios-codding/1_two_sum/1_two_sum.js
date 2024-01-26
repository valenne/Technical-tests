var nums = [1, 2, 3, 7, 5];
var target = 9;
function twoSum(nums, target) {
    var dictionary = {};
    var diff;
    for (var i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (Object.keys(dictionary).includes(diff.toString())) {
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
