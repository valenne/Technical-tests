const nums = [1, 2, 3, 7, 5]
const target = 9

function twoSum(nums: number[], target: number): number[] | false {
  let dictionary: { [key: string]: number } = {}
  let diff: number

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i]

    if (Object.keys(dictionary).includes(diff.toString())) {
      return [dictionary[diff], i]
    } else {
      dictionary[nums[i]] = i
    }
  }
  return false
}

const numberResponse = twoSum(nums, target)
console.log(numberResponse)
