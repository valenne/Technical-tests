function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 0 || s.length >= 5 * 10 ** 4) return 0
  if (s.length === 1) return s.length

  let longest: number = 0
  let tempSet: Set<string> = new Set()
  let left: number = 0
  let rigth: number = 0

  while (rigth < s.length) {
    let letter: string = s[rigth]

    if (!tempSet.has(letter)) {
      tempSet.add(letter)
      longest = Math.max(longest, tempSet.size)
      rigth++
    } else {
      tempSet.delete(s[left])
      left++
    }
  }
  return longest
}

const test_1 = lengthOfLongestSubstring('abcabcbb')
const test_2 = lengthOfLongestSubstring('bbbbb')
const test_3 = lengthOfLongestSubstring('pwwkew')
const test_4 = lengthOfLongestSubstring('')
const test_5 = lengthOfLongestSubstring('enjoyalgorithms')

console.table({
  test_1,
  test_2,
  test_3,
  test_4,
  test_5
})
