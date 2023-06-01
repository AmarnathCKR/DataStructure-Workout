const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
const searchName = 'Charlie'

for (let i = 0; i < names.length; i++) {
  if (names[i] === searchName) {
    console.log(`Found ${searchName} at index ${i}`)
    return
  }
}
