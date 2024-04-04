export const ROMANS_CONSTANTS: { [k: string]: string } = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

function intToRoman(num: number): string {
  if (num < 1 || num > 3999) return ''

  let numbers = Object.keys(ROMANS_CONSTANTS).map((romanKeys) => +romanKeys)
  let filteredNumber = numbers.filter((minus) => minus <= num).sort((a, b) => b - a)

  let roman: string = ''

  for (let i = 0; i < filteredNumber.length; i++) {
    let isOne: number = Math.floor(num / filteredNumber[i])

    if (isOne === 1) {
      let letter = ROMANS_CONSTANTS[filteredNumber[i]]
      roman += letter
      num -= filteredNumber[i]
    }

    if (isOne > 1) {
      let letter = ROMANS_CONSTANTS[filteredNumber[i]]
      roman += letter
      num -= filteredNumber[i]
      i--
    }
  }

  return roman
}

const roman_1 = intToRoman(123)
const roman_2 = intToRoman(2031)
const roman_3 = intToRoman(221)
const roman_4 = intToRoman(1302)

console.table({ roman_1, roman_2, roman_3, roman_4 })
