type ListProps = {
  l1: number[]
  l2: number[]
}

const containTwoDigit = (list: number[]) => {
  const justNumbers = list.map((num) => (typeof num === 'number' ? 1 : -1))

  if (!justNumbers.indexOf(-1)) {
    return {
      hasError: true,
      msg: `An element from an array is different from type number`
    }
  }
  if (!list) {
    return {
      hasError: true,
      msg: `Not exist array to evaluate`
    }
  }
  if (list.length === 0) {
    return {
      hasError: true,
      msg: `An array contains 0 elements`
    }
  }

  if (list.length !== list.join('').length) {
    return {
      hasError: true,
      msg: `An array contain double digit in one index`
    }
  }
  return {
    hasError: false,
    msg: ''
  }
}

function addTwoNumbers({ l1, l2 }: ListProps): number[] | string {
  const error =
    (containTwoDigit(l1).hasError && containTwoDigit(l1)) ||
    (containTwoDigit(l2).hasError && containTwoDigit(l2))

  if (error) {
    return error.msg
  }

  const reversedSum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''))

  const finalResult = reversedSum
    .toString()
    .split('')
    .reverse()
    .map((num) => {
      return Number(num)
    })

  return finalResult
}

const result_1 = addTwoNumbers({ l1: [2, 4, 3], l2: [5, 6, 4] })
const result_2 = addTwoNumbers({ l1: [2], l2: [0] })
const result_3 = addTwoNumbers({ l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] })
const result_emptyArray = addTwoNumbers({ l1: [], l2: [1, 2, 3] })
const result_doubleDigit = addTwoNumbers({ l1: [3, 1, 3], l2: [0, 1, 2] })

console.log({
  result_1,
  result_2,
  result_3,
  result_emptyArray,
  result_doubleDigit
})
