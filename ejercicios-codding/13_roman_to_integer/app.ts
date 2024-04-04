const ROMANS_CONSTANTS = {
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

const LetterToCare = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

type RomanValues = 'I' | 'IV' | 'V' | 'IX' | 'X' | 'XL' | 'L' | 'XC' | 'C' | 'CD' | 'D' | 'CM' | 'M'

const getObjectKey = (obj: any, value: string) => {
  return Object.keys(obj).find((key) => obj[key] === value)
}

function romanToInt(s: string): number {
  // valid's input
  let isValidInput: boolean = typeof s === 'string' && true

  if (!isValidInput) return 0

  let splitRomanToArray = s.toUpperCase().split('')

  let number: number = 0

  for (let i = 0; i < s.length; i++) {
    let romanStringToSearch: string = ''

    if (LetterToCare.indexOf(splitRomanToArray[i] + splitRomanToArray[i + 1]) >= 0) {
      let temporalString = splitRomanToArray[i] + splitRomanToArray[i + 1]
      romanStringToSearch = temporalString
      i++
    }

    number +=
      romanStringToSearch !== ''
        ? +getObjectKey(ROMANS_CONSTANTS, romanStringToSearch)
        : +getObjectKey(ROMANS_CONSTANTS, splitRomanToArray[i])
  }

  return number
}

let numberFromRomanLetter_1 = romanToInt('MCMXCIV')
let numberFromRomanLetter_2 = romanToInt('LVIII')
let numberFromRomanLetter_3 = romanToInt('III')
let numberFromRomanLetter_4 = romanToInt('IV')
let numberFromRomanLetter_5 = romanToInt('XC')

console.log({
  numberFromRomanLetter_1,
  numberFromRomanLetter_2,
  numberFromRomanLetter_3,
  numberFromRomanLetter_4,
  numberFromRomanLetter_5
})
