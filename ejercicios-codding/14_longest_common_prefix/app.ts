function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''

  let sortedArray: string[] = strs.sort((a, b) => b.length - a.length)
  let prefix: string = strs[0]

  for (let i = 0; i < strs.length; i++) {
    while (sortedArray[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
    }
  }
  return prefix
}

let longest_1 = longestCommonPrefix(['flower', 'flow', 'flight'])

console.log(longest_1)
