function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length < numRows) return s

  let arr: string[] = new Array(numRows).fill('')

  let direction: boolean = false
  let count: number = 0

  for (let i = 0; i < s.length; i++) {
    let curr: string = s[i]

    arr[count] += curr

    if (count === 0 || count >= numRows - 1) {
      direction = !direction
    }
    direction ? count++ : count--
  }

  return arr.join('')
}

console.log(convert('PAYPALISHIRING', 4))
console.log(convert('PAYPALISHIRING', 5))
console.log(convert('PAYPALISHIRING', 1))
console.log(convert('PAYPALISHIRING', 2))
