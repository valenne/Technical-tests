interface resultsProps {
  sum: number
  substring: string[]
  acum: number[]
}

function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0
  const toArray = s.split('')

  let results: resultsProps = {
    sum: 0,
    substring: [],
    acum: []
  }

  for (let letter of toArray) {
    if (!results.substring.includes(letter)) {
      results.sum += 1
      results.substring.push(letter)
    } else if (results.substring.includes(letter)) {
      results.acum.push(results.sum)
      results.substring.push(letter)
      results.sum -= 1
    } else {
      results.sum = 0
    }
  }

  return Math.max(...results.acum)
}

const test_1 = lengthOfLongestSubstring('abcabcbb')
const test_2 = lengthOfLongestSubstring('bbbbb')
const test_3 = lengthOfLongestSubstring('pwwkew')
const test_4 = lengthOfLongestSubstring('')

console.table({
  test_1,
  test_2,
  test_3,
  test_4
})
