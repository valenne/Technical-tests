const nums = [1, 2, 2, 2, 5]
const target = 6

function twoSum(nums: number[], target: number): number[] | boolean {
  let dictionary: { [key: string]: number } = {}
  let diff: number = 0

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i]

    let findElementByIndexOf = Object.keys(dictionary).indexOf(diff.toString()) >= 0

    if (findElementByIndexOf) {
      return [dictionary[diff], i]
    } else {
      dictionary[nums[i]] = i
    }
  }
  return false
}

const numberResponse = twoSum(nums, target)
console.log(numberResponse)
