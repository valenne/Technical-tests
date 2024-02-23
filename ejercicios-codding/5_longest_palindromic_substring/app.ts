const palindromo = (left: number, rigth: number, text: string) => {
  while (left >= 0 && rigth < text.length && text[left] === text[rigth]) {
    left--
    rigth++
  }

  return text.slice(left + 1, rigth)
}

function longestPalindrome(s: string): string | boolean {
  let longest = ''
  const typeVariable = typeof s

  // string is empty
  if (s.length === 0 || typeVariable !== 'string') return false

  for (let i = 0; i < s.length; i++) {
    const evenPal = palindromo(i, i + 1, s)
    const oddPal = palindromo(i, i, s)

    let longestPal = evenPal.length > oddPal.length ? evenPal : oddPal

    if (longestPal.length > longest.length) {
      longest = longestPal
    }
  }

  return longest
}

const sEx1 = 'aqllc' // [0,1,2,3,4,5,6,7]
const sEx2 = 'babad'
const sEx3 = 'cbbd'
const sEx4 = 'rapar'
const sEx5 = 'reconocer'
const sEx6 = 'saweraparertrrq'

console.log(longestPalindrome(sEx1))
console.log(longestPalindrome(sEx2))
console.log(longestPalindrome(sEx3))
console.log(longestPalindrome(sEx4))
console.log(longestPalindrome(sEx5))
console.log(longestPalindrome(sEx6))
