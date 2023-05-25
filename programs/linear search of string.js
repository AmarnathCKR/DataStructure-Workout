const word = 'hello'
const searchLetter = 'e'

for (let i = 0; i < word.length; i++) {
  if (word[i] === searchLetter) {
    console.log(`Found ${searchLetter} at index ${i}`)
    return
  }
}