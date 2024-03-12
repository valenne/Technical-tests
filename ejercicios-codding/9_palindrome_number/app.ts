/*
9. Palindromo number

*/
function numberToArray(x: number): number[] {
  if (x === 0) return [0]

  const numbers = []
  let tempNumber = x

  while (tempNumber > 0) {
    const digit = tempNumber % 10

    numbers.unshift(digit)
    tempNumber = Math.floor(tempNumber / 10)
  }

  return numbers
}

function convertArrayToNumber(arr: number[]): number {
  let numb: number = 0
  // Si el array contiene solo el valor 0, retornar 0

  if (arr.length === 0) return 0
  if (arr.length === 1 && arr[0] === 0) {
    return 0
  }
  numb = arr.reduce((a, b) => a * 10 + b)

  // Retornar el número
  return numb
}

function isPalindrome(x: number): boolean {
  let arrayNumber = numberToArray(x)

  let copyArray = [...arrayNumber]
  let reversedArray = copyArray.reverse()
  let reverseNumber = convertArrayToNumber(reversedArray)

  if (x !== reverseNumber) return false

  return true
}

let numberPalin_1 = isPalindrome(12)
let numberPalin_2 = isPalindrome(10)
let numberPalin_3 = isPalindrome(0)
let numberPalin_4 = isPalindrome(101)
let numberPalin_5 = isPalindrome(111)

console.table({ numberPalin_1, numberPalin_2, numberPalin_3, numberPalin_4, numberPalin_5 })
