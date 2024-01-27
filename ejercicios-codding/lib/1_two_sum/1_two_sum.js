"use strict";
const nums = [1, 2, 3, 7, 5];
const target = 9;
function twoSum(nums, target) {
    let dictionary = {};
    let diff;
    for (let i = 0; i < nums.length; i++) {
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
const numberResponse = twoSum(nums, target);
console.log(numberResponse);
//# sourceMappingURL=1_two_sum.js.map