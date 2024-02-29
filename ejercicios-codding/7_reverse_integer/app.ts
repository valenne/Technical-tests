function numberIntoLimit(n: number): number {
  let limitless: boolean = n >= 2 ** 31 - 1 || (n <= (-2) ** 31 && true)

  if (limitless) return 0

  return n
}

function reverse(x: number): number {
  let xToString: string = x.toString()

  if (xToString.includes('-')) {
    let middleLane: string = xToString.slice(0, 1)
    let restNumber: string = xToString.slice(1)

    let reversed: number = numberIntoLimit(
      Number(middleLane + restNumber.split('').reverse().join(''))
    )

    return reversed
  }

  let reversed: number = numberIntoLimit(Number(x.toString().split('').reverse().join('')))
  return reversed
}

const numberOne = reverse(123) // 321
const numberTwo = reverse(-123) // -321
const numberthree = reverse(120) // 21

console.table({ numberOne, numberTwo, numberthree })
