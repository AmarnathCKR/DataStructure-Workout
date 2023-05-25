const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
const searchName = 'Charlie'

let start = 0
let end = names.length - 1
let mid

while (start <= end) {
  mid = Math.floor((start + end) / 2)

  if (names[mid] === searchName) {
    console.log(`Found ${searchName} at index ${mid}`)
    break
  } else if (names[mid] < searchName) {
    start = mid + 1
  } else {
    end = mid - 1
  }
}
