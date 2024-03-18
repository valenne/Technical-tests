function maxArea(height: number[]): number {
  let maxArea: number = 0

  if (height.length === 1) {
    return maxArea
  }

  if (height.length === 2) {
    return (maxArea = Math.min(height[0], height[1]) * 1)
  }

  // quantity of elements accepted
  if (height.length <= 2 || height.length > 10 ** 5) return maxArea

  let left: number = 0
  let rigth: number = height.length - 1

  while (left !== rigth) {
    let tempArea = Math.min(height[left], height[rigth]) * (rigth - left)

    if (tempArea > maxArea) {
      maxArea = tempArea
    }

    height[left] >= height[rigth] ? rigth-- : left++
  }

  return maxArea
}

let maxArea_1 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
let maxArea_2 = maxArea([1, 1])
let maxArea_3 = maxArea([7])
let maxArea_4 = maxArea([7, 2, 1, 2, 2, 1, 5, 5, 1, 2])

console.table({
  maxArea_1,
  maxArea_2,
  maxArea_3,
  maxArea_4
})
