type OrderResult = (a: number, b: number) => number

const sortDescending: OrderResult = (a, b) => {
  return a > b ? -1 : 1
}

const sortAscending: OrderResult = (a, b) => {
  return a > b ? 1 : -1
}

function buildArray(items: number, sortOrder: 'ascending' | 'descending') {
  let randomNumbers: number[] = []

  for (let i = 0; i < items; i++) {
    let numb = Math.floor(Math.random() * 100 + 1)
    randomNumbers.push(numb)
  }

  if (sortOrder === 'ascending') {
    return randomNumbers.sort(sortAscending)
  } else {
    return randomNumbers.sort(sortDescending)
  }
}

let myArray1 = buildArray(12, 'ascending')
let myArray2 = buildArray(8, 'descending')

console.log(myArray1)
console.log(myArray2)
