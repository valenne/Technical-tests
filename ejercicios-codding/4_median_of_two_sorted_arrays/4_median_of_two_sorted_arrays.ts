function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nArr: number[] = [...nums1, ...nums2]
  const sortedArray: number[] = nArr.sort((a, b) => a - b)
  const n: number = sortedArray.length
  const isPar: boolean = n % 2 === 0 && true
  const typeOfDiffFromNumber: boolean =
    sortedArray
      .map((value) => (typeof value === 'number' ? true : false))
      .filter((isNumber) => isNumber === true).length === n && true

  let median: number = -1

  // validations
  // different type from number
  if (!typeOfDiffFromNumber) {
    return median
  }
  // empty
  if (!Boolean(n)) {
    return median
  }

  // calculate media

  if (isPar) {
    median = (sortedArray[n / 2 - 1] + sortedArray[n / 2]) / 2
    return median
  } else if (!isPar) {
    median = sortedArray[(n - 1) / 2]
    return median
  }

  return median
}

const median_1 = findMedianSortedArrays([1, 3], [2]) // output = 2
const median_2 = findMedianSortedArrays([2, 2], [3, 4]) // 0utput = 2,5
const median_3 = findMedianSortedArrays([2, 5, 11, 8], [16, 21, 30]) // 0utput = 11
const median_4 = findMedianSortedArrays([3, 5, 10, 8], [79, 36, 255, 24]) // 0utput = 17

console.table({ median_1, median_2, median_3, median_4 })
